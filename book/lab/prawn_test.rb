require 'prawn'

pdf = Prawn::Document.new
# pdf.text 'Hello World ✌️😄' # Prawn::Errors::IncompatibleStringEncoding
pdf.text 'Hello World'
pdf.render_file 'test.pdf'
