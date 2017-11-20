isSupported
===========

Checks if new ECMAScript features are supported or not.

```
const is = require('is-supported')

if (is.asyncSupported) {
  console.log('Async is supported')
}

if (is.generatorSupported) {
  console.log('Generators are supported')
}
```
