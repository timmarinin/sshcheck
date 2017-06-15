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
    var stop = document.querySelector('.stop')
    stop.classList.add('active')
    txt.value = 'Не делай так больше, пожалуйста'
    var img = document.createElement('img')
    img.src = './stop.png'
    img.classList.add('sign')
    stop.insertBefore(img, stop.children[0])
  }

  function displayError() {
    var err = document.querySelector('.error')
    err.classList.add('active')
  }

  function hideEverything() {
    var activeElements = document.querySelectorAll('.active')
    for (var el of activeElements) {
      el.classList.remove('active')
    }
  }

  document.querySelector('.understood').addEventListener('click', hideEverything)
})()
