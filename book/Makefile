DIR = dist
INPUT = book
OUTPUT = book
# OUTPUT = book-$(date +%Y-%m-%d)
DIAGRAM = --require=asciidoctor-diagram
MATH = --require=asciidoctor-mathematical
# HTML5S = --require=asciidoctor-html5s --backend=html5
REQUIRES = ${DIAGRAM} ${MATH}
OUTPUT_FOLDER = --destination-dir=${DIR}
MANPAGE = --backend=manpage
HTML = --backend=html5 -a max-width=75em
RAW_HTML = --backend=html5 -a stylesheet! -a source-highlighter!
PDF =  --backend=pdf --require=asciidoctor-pdf
EPUB = --backend=epub3 --require=asciidoctor-epub3
KINDLE = ${EPUB} -a ebook-format=kf8

all: html
# all: html raw_html pdf
# all: clean manpage html raw_html pdf compressed_pdf epub kindle

manpage:
	asciidoctor ${MANPAGE} ${OUTPUT_FOLDER} --out-file=${OUTPUT}.1 ${INPUT}.adoc; \

html:
	asciidoctor ${HTML} ${REQUIRES} ${OUTPUT_FOLDER} --out-file=${OUTPUT}.html ${INPUT}.adoc; \

raw_html:
	asciidoctor ${RAW_HTML} ${REQUIRES} ${OUTPUT_FOLDER} --out-file=raw_${OUTPUT}.html ${INPUT}.adoc; \

# https://github.com/jirutka/asciidoctor-html5s
# html5s:
# 	asciidoctor ${HTML5S} ${OUTPUT_FOLDER} --out-file=${OUTPUT}.html ${INPUT}.adoc; \

# https://github.com/asciidoctor/asciidoctor-pdf/blob/master/docs/theming-guide.adoc
# check _resources/pdfstyles
pdf:
	asciidoctor ${PDF} ${REQUIRES} ${OUTPUT_FOLDER} --out-file=${OUTPUT}.pdf ${INPUT}.adoc; \

# Courtesy of
# http://www.smartjava.org/content/compress-pdf-mac-using-command-line-free
# Requires `brew install ghostscript`
compressed_pdf: pdf
	gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=${DIR}/compressed_book.pdf ${DIR}/book.pdf; \

# check _resources/epubstyles
epub:
	asciidoctor ${EPUB} ${REQUIRES} ${OUTPUT_FOLDER} --out-file=${OUTPUT}.epub ${INPUT}.adoc; \

kindle:
	asciidoctor ${KINDLE} ${REQUIRES} ${OUTPUT_FOLDER} --out-file=${OUTPUT}.mobi ${INPUT}.adoc; \
	if [ -e "${DIR}/${OUTPUT}-kf8.epub" ]; \
		then rm ${DIR}/${OUTPUT}-kf8.epub; \
	fi; \

stats:
	wc -w chapters/*.adoc | sort -n \

clean:
	if [ -d ".asciidoctor" ]; \
		then rm -r .asciidoctor; \
	fi; \
	if [ -d "${DIR}" ]; \
		then rm -r ${DIR}; \
	fi; \

