FROM circleci/ruby:2.5.3-stretch-node
# FROM circleci/ruby:2.7.1-buster-node

COPY . /app

RUN node -v
RUN ruby -v
RUN bundle -v

RUN apt-get update && apt-get install -y \
  graphviz \
  cmake bison flex libffi-dev libxml2-dev libgdk-pixbuf2.0-dev libcairo2-dev libpango1.0-dev ttf-lyx \
  graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat

RUN cd book/config && bundle install

CMD cd book/config && make VERSION="$(npx -c 'echo "$npm_package_version"')"
