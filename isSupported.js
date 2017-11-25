function isSupported (test) {
  try {
    eval(test) // eslint-disable-line no-eval
    return true
  } catch (err) {
    return false
  }
}

module.exports = {
  get asyncSupported () {
    return isSupported('(async function() {})')
  },
  get generatorSupported () {
    return isSupported('(function * () {})')
  }
}
