function isSupported (test) {
  try {
    eval(test)
    return true
  } catch () {
    return false
  }
}

module.exports = {
  get asyncSupported = () {
    return isSupported('(async function() {})')
  },
  get generatorSupported = () {
    return isSupported('(function * () {})')
  }
}
