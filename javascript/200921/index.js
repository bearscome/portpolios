'use strict'

function sayHello(a) {
  console.log(`${a} 안녕`)
}

sayHello('효성')

const operator = {
  plus: function (a, b) {
    return a + b
  },
  multyful: function (a, b) {
    return a * b
  }
}

const add = operator.multyful(4, 5)
console.log(add)



window.onload = function () {
  const title = document.getElementById('title');
  console.dir(title)
  title.innerHTML = "느가 느고 니가 니고?"
  title.style.fontSize = '4rem'
  title.style.color = 'powderblue'
  document.title = "니가 니고?"


  function resizing() {
    console.log('resizing')
  }

  window.addeventlistener('resize', resizing)
}
