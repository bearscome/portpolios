
// prompt('몇살 이세요?')
// const age = ""

// if (age < 19) {
//   console.log('꺼져 병신아')
// } else if (age > 20) {
//   console.log("매출좀 올려주세요")
// } else {
//   console.log("숫자를 넣어주세요")
// }

// window.onload = function () {
//   const title = document.getElementById('title')

//   const BaseColor = "rgb(52, 73, 94)";
//   const OtherColor = "#7f8c8d";

//   function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === BaseColor) {
//       title.style.color = OtherColor;
//     } else {
//       title.style.color = BaseColor
//     }
//   }
//   function init() {
//     title.style.color = BaseColor;
//     title.addEventListener('dblclick', handleClick)
//   }
//   init()
// }

window.onload = function () {
  const title = document.getElementById('title')
  const clicked = 'clicked'

  function ClickedHandle() {
    // const hasClass = title.classList.contains(clicked)
    // if (hasClass) {
    //   title.classList.remove = (clicked)

    // } else {
    //   title.classList.add = (clicked) ///className 은 전에 설정 해 놓은 다른 클래스 네임까지 지워서 적용함 독재적인 느낌 그래서 써야하는게 classList 임
    // }
    title.classList.toggle(clicked)

  }

  function init() {
    title.addEventListener('click', ClickedHandle)
  }

  init()
}