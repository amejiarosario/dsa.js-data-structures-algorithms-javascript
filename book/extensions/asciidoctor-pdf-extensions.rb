require 'asciidoctor-pdf' unless defined? ::Asciidoctor::Pdf

module AsciidoctorPdfExtensions
  # Override the built-in https://github.com/asciidoctor/asciidoctor-pdf/blob/master/lib/asciidoctor-pdf/converter.rb
  # layout_toc to move colophon before front of table of contents
  # NOTE we assume that the colophon fits on a single page
  def layout_toc doc, num_levels = 2, toc_page_number = 2, num_front_matter_pages = 0
    go_to_page toc_page_number unless (page_number == toc_page_number) || scratch?
    if scratch?
      colophon = doc.find_by(context: :section) {|sect| sect.sectname == 'colophon' }
      if (colophon = colophon.first)
        doc.instance_variable_set :@colophon, colophon
        colophon.parent.blocks.delete colophon
      end
    else
      if (colophon = doc.instance_variable_get :@colophon)
        # if prepress book, consume blank page before table of contents
        go_to_page(page_number - 1) if @ppbook
        convert_section colophon
        go_to_page(page_number + 1)
      end
    end
    offset = colophon && !@ppbook ? 1 : 0
    toc_page_numbers = super doc, num_levels, (toc_page_number + offset), num_front_matter_pages
    scratch? ? ((toc_page_numbers.begin - offset)..toc_page_numbers.end) : toc_page_numbers
  end

  # force chapters to start on new page;
  # force select chapters to start on the recto (odd-numbered, right-hand) page
  def start_new_chapter chapter
    start_new_page unless at_page_top?
    if @ppbook && verso_page? && !(chapter.option? 'nonfacing')
      update_colors # prevents Ghostscript from reporting a warning when running content is written to blank page
      start_new_page
    end
  end

  def layout_chapter_title node, title, opts = {}
    # puts node.id + ': ' + title

    if (sect_id = node.id) == '_dedication' || sect_id == 'acknowledgements'
      layout_heading_custom title, align: :center
    elsif sect_id == 'colophon'
      # puts 'Processing.. ' + node.sectname + '...'
      if node.document.attr? 'media', 'prepress'
        move_down 225
      else
        move_down 360
      end
      layout_heading title, size: @theme.base_font_size
    elsif sect_id.include? 'chapter' # chapters
      # puts 'Processing ' + sect_id + '...'

      blue = [91, 54, 8, 13]
      green = [42, 1, 83, 1]
      black = [0, 0, 0, 100]
      yellow = 'FFCC02'
      red = 'ff0267' # https://www.sessions.edu/color-calculator/
      purple = '9a02ff'
      light_green = '26FFF4'

      # use custom font for all custom headings
      # font 'Akkurat' do
      font 'Open Sans' do
        if node.document.attr? 'media', 'prepress'
          move_down 120
        else
          move_down 180
        end

        if @ppbook
          layout_heading 'PART', align: :right, size: 100, style: :normal
        else
          # layout_heading 'PART', align: :right, size: 100, color: blue, style: :normal
          # layout_heading 'PART', align: :right, size: 100, color: red, style: :normal
          layout_heading 'PART', align: :right, size: 100, color: yellow, style: :normal
        end

        move_up 40

        part_number = 'ONE'
        if sect_id.include? 'chapter-2'
          part_number = 'TWO'
        elsif sect_id.include? 'chapter-3'
          part_number = 'THREE'
        elsif sect_id.include? 'chapter-4'
          part_number = 'FOUR'
        elsif sect_id.include? 'chapter-5'
          part_number = 'FIVE'
        end


        if @ppbook
          layout_heading part_number, align: :right, size: 100, style: :bold
          layout_heading title, align: :right, style: :normal, size: 30
        else
          # layout_heading part_number, align: :right, size: 100, color: green, style: :bold
          # layout_heading title, align: :right, color: green, style: :normal, size: 30
          layout_heading part_number, align: :right, size: 100, color: yellow, style: :bold
          layout_heading title, align: :right, style: :normal, size: 30
        end
      end

      bounds.move_past_bottom
    else
      super # delegate to default implementation
    end
  end

  def layout_heading_custom string, opts = {}
    # puts "layout_heading_custom: #{string}"

    move_down 100
    typeset_text string, calc_line_metrics((opts.delete :line_height) || @theme.heading_line_height), {
      inline_format: true
    }.merge(opts)
    move_up 5
    i = 0
    underline = ''
    while i < string.length do
      if string == 'Dedication'
        underline += '/////'
      else
        underline += '//////'
      end
      i += 1
    end
    if string == 'Dedication'
      underline += '////'
    end
    typeset_text underline, calc_line_metrics((opts.delete :line_height) || @theme.heading_line_height), {
      inline_format: true, color: 'B0B0B0', size: 8, style: :italic
    }.merge(opts)
    move_down 20
  end

  # Override default section call
  # This adds a new page for chapter level 2 (not implemented yet, but still here for future reference)
  def convert_section sect, opts = {}
    # puts "convert_section: #{sect.level} #{sect.title} | #{sect.numbered_title} | part_or_chapter: #{sect.part_or_chapter?}"

    if sect.sectname == 'abstract'
      # HACK cheat a bit to hide this section from TOC; TOC should filter these sections
      sect.context = :open
      return convert_abstract sect
    end

    theme_font :heading, level: (hlevel = sect.level + 1) do
      title = sect.numbered_title formal: true
      align = (@theme[%(heading_h#{hlevel}_align)] || @theme.heading_align || @base_align).to_sym
      type = nil
      if sect.part_or_chapter?
        if sect.chapter?
          type = :chapter
          start_new_chapter sect
        else
          type = :part
          start_new_part sect
        end
      else
        # FIXME smarter calculation here!!
        # puts "level = #{sect.level}, at_page_top?= #{at_page_top?}, calc=#{cursor > (height_of title) + @theme.heading_margin_top + @theme.heading_margin_bottom + (@theme.base_line_height_length * 1.5)}"
        start_new_page unless at_page_top? || #(
          cursor > (height_of title) + @theme.heading_margin_top + @theme.heading_margin_bottom + (@theme.base_line_height_length * 1.5) #&&
          # sect.level != 2)
      end
      # QUESTION should we store pdf-page-start, pdf-anchor & pdf-destination in internal map?
      sect.set_attr 'pdf-page-start', (start_pgnum = page_number)
      # QUESTION should we just assign the section this generated id?
      # NOTE section must have pdf-anchor in order to be listed in the TOC
      sect.set_attr 'pdf-anchor', (sect_anchor = derive_anchor_from_id sect.id, %(#{start_pgnum}-#{y.ceil}))
      add_dest_for_block sect, sect_anchor
      if type == :part
        layout_part_title sect, title, align: align
      elsif type == :chapter
        layout_chapter_title sect, title, align: align
      else
        layout_heading title, align: align
      end
    end

    sect.sectname == 'index' ? (convert_index_section sect) : (convert_content_for_block sect)
    sect.set_attr 'pdf-page-end', page_number
  end

end

Asciidoctor::Pdf::Converter.prepend AsciidoctorPdfExtensions
