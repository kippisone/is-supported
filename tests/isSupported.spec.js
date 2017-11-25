const inspect = require('inspect.js')
const is = require('../')

describe('Module', () => {
  describe('getters', () => {
    it('should return a boolean if async is supported or not', () => {
      inspect(is.asyncSupported).isBoolean()
    })

    it('should return a boolean if generators are supported or not', () => {
      inspect(is.generatorSupported).isBoolean()
    })
  })
})
