isSupported
===========

[![Build Status](https://travis-ci.org/Andifeind/is-supported.svg?branch=develop)](https://travis-ci.org/Andifeind/is-supported)

Checks if ECMAScript feature is supported or not.

```
const is = require('is-supported')

if (is.asyncSupported) {
  console.log('Async is supported')
}

if (is.generatorSupported) {
  console.log('Generators are supported')
}
```
