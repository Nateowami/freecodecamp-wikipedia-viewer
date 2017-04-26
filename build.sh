#! /bin/bash

PATH="$PWD/node_modules/.bin:$PATH"

set -x

build () {
  sass
  js
}

watch () {
  build
  sass --watch &
  js --watch &
  wait
}

sass () {
  node-sass ${1:-} --output style.css style.scss
}

js () {
  babel ${1:-} --presets es2015 --out-file script.js script.es6.js
}
