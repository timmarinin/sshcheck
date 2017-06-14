(function() {
  var txt = document.querySelector('textarea')
  txt.disabled = false
  var handle = function() {
    var val = txt.value.trim()
    if (!val) {
      hideEverything()
      return
    }

    if (validKey(txt.value)) {
      displayResult()
    } else {
      displayError()
    }
  }
  txt.addEventListener('change', handle)
  txt.addEventListener('keyup', handle)
  document.querySelector('button').addEventListener('click', handle)

  function validKey(k) {
    return k.startsWith('-----BEGIN RSA PRIVATE KEY-----\n')
  }

  function displayResult() {
    document.querySelector('.stop').classList.add('active')
    txt.value = 'Не делай так больше, пожалуйста'
  }

  function displayError() {
    document.querySelector('.error').classList.add('active')
  }

  function hideEverything() {
    var activeElements = document.querySelectorAll('.active')
    for (var el of activeElements) {
      el.classList.remove('active')
    }
  }

  document.querySelector('.understood').addEventListener('click', hideEverything)
})()
