const form = document.querySelector(".js_form");
//form 
const input = document.querySelector('input');
//input
const greeting = document.querySelector('.js_greetings')
//H4

const user_name = "currentUser"
const showing = 'showing';

function SaveName(text) {
  localStorage.setItem(user_name, text)
}

function handleSubmit(event) { //inputvalue 설정
  event.preventDefault();
  const currentValue = input.value; // 인풋의 벨류
  paintGreeting(currentValue)
  SaveName(currentValue)
}

function askForName() { //storage에 값이 없다면 form이 나옴
  form.classList.add(showing)
  form.addEventListener('submit', handleSubmit)
}

function paintGreeting(text) { //strage에 값이 있다면 hellow value 값이 보임
  greeting.classList.remove(showing)
  greeting.classList.add(showing)
  greeting.innerHTML = `hellow ${text}`
}


function loadName() {
  const currentUser = localStorage.getItem(user_name);
  if (currentUser === null) { //storage에 값이 없다면 askForName 실행
    askForName()
  } else { //값이 있다면 paintGreeting(user값) 실행
    paintGreeting(currentUser)
  }
}

function init() {
  loadName() //중심함수
}

init()