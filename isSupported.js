function isSupported (test) {
  try {
    eval(test)
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
