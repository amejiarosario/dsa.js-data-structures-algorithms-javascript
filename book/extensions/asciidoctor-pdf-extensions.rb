require 'asciidoctor-pdf' unless defined? ::Asciidoctor::Pdf

module AsciidoctorPdfExtensions
  # Override the built-in layout_toc to move colophon before front of table of contents
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
    puts node.id

    if (sect_id = node.id) == '_dedication' || sect_id == 'acknowledgements'
      layout_heading_custom title, align: :center
    elsif sect_id == 'colophon'
      puts 'Processing.. ' + node.sectname + '...'
      if node.document.attr? 'media', 'prepress'
        move_down 225
      else
        move_down 360
      end
      layout_heading title, size: @theme.base_font_size
    elsif sect_id.include? 'chapter' # chapters
      puts 'Processing ' + sect_id + '...'
      # use Akkurat font for all custom headings
      font 'Akkurat' do
        if node.document.attr? 'media', 'prepress'
          move_down 120
        else
          move_down 180
        end
        if @ppbook
          layout_heading 'PART', align: :right, size: 100, style: :normal
        else
          layout_heading 'PART', align: :right, size: 100, color: [91, 54, 8, 13], style: :normal
        end
        move_up 40

        part_number = 'ONE'
        if sect_id.include? 'chapter-2'
          part_number = 'TWO'
        elsif sect_id.include? 'chapter-3'
          part_number = 'THREE'
        end
        if @ppbook
          layout_heading part_number, align: :right, size: 100, style: :bold
          layout_heading title, align: :right, style: :normal, size: 30
        else
          layout_heading part_number, align: :right, size: 100, color: [42, 1, 83, 1], style: :bold
          layout_heading title, align: :right, color: [42, 1, 83, 1], style: :normal, size: 30
        end
      end

      bounds.move_past_bottom
    else
      super # delegate to default implementation
    end
  end

  def layout_heading_custom string, opts = {}
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
end

Asciidoctor::Pdf::Converter.prepend AsciidoctorPdfExtensions
