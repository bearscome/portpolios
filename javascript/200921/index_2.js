window.onload = function () {
  const title = document.querySelector("#title")
  console.log(title)
  function titleColor(e) {
    title.style.color = "red"
    title.style.fontSize = "42rem"
  }
  window.addEventListener('click', titleColor)
  //함수 뒤에 ()붙이면 바로 실행, 붙이지 않으면 이벤트가 발생할 때 실행
  //addEventListener = click, resize, 이벤트 할 때 쓰는 듯
}
