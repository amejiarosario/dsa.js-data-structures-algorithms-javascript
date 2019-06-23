DIR = dist

INPUT = book
OUTPUT = dsajs-algorithms-javascript-book
# OUTPUT = book-$(date +%Y-%m-%d)

DIAGRAM = --require=asciidoctor-diagram
MATH = --require=asciidoctor-mathematical
# HTML5S = --require=asciidoctor-html5s --backend=html5
REQUIRES = ${DIAGRAM} ${MATH}
OUTPUT_FOLDER = --destination-dir=${DIR}

MANPAGE = --backend=manpage
HTML = --backend=html5 -a max-width=75em
RAW_HTML = --backend=html5 -a stylesheet! -a source-highlighter!
EXTENSIONS = -r ./extensions/asciidoctor-pdf-extensions.rb
PDF = --trace ${EXTENSIONS} --backend=pdf --require=asciidoctor-pdf -a pdf-fontsdir=fonts -a source-highlighter=pygments -a revnumber=${VERSION}
EPUB = --backend=epub3 --require=asciidoctor-epub3
KINDLE = ${EPUB} -a ebook-format=kf8

# make VERSION=1.2.2 pdf
all: pdf
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
uncompressed_pdf:
	asciidoctor ${PDF} ${REQUIRES} ${OUTPUT_FOLDER} --out-file=${OUTPUT}.pdf ${INPUT}.adoc; \

sample-pdf:
	asciidoctor --trace ${PDF} ${REQUIRES} ${OUTPUT_FOLDER} --out-file=sample.pdf sample.adoc; \

pdf: uncompressed_pdf
	bundle exec hexapdf optimize --force ${DIR}/${OUTPUT}.pdf ${DIR}/${OUTPUT}-v${VERSION}.pdf; \
	cp ${DIR}/${OUTPUT}-v${VERSION}.pdf ~/OneDrive/Authoring/dsaJS/published/; \

# # Courtesy of
# # http://www.smartjava.org/content/compress-pdf-mac-using-command-line-free
# # Requires `brew install ghostscript`
# compressed_pdf: pdf
# 	gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=${DIR}/compressed_book.pdf ${DIR}/book.pdf; \


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

# not working :(
watch:
	fswatch /Users/admejiar/Code/algorithmsJS/src/**/*.js /Users/admejiar/Code/algorithmsJS/**/*.adoc | xargs -n1 -I{} make pdf

# fswatch /Users/admejiar/Code/algorithmsJS/src/**/*.js /Users/admejiar/Code/algorithmsJS/**/*.adoc | xargs -n1 -I{} sh -c 'make pdf && echo "\r\ndone!"'
