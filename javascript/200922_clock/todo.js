const toDoform = document.querySelector('.js_toDoForm'),
  toDoInput = toDoform.querySelector('input'),
  toDoList = document.querySelector('.js_toDoList')

const ToDos_LS = "toDos"
let toDos = []

function deleteToDo(event) { //HTML에서만 삭제 storage엔 남아있음
  const btn = event.target; //btn을 눌렀을 떄 해당 버튼
  const li = btn.parentNode; //btn의 부모인 li
  toDoList.removeChild(li)
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id)
  })
  toDos = cleanToDos //투두와 지운 두투를 같게 한다.
  savaToDos()
}

function savaToDos() {
  localStorage.setItem(ToDos_LS, JSON.stringify(toDos))
  //자바스크립트를 웹에서 오브젝트를 정장을 못하니 JSON으로 스트링타입으로 변환해야함
}

function paintToDo(text) {
  const li = document.createElement('li')
  const delBtn = document.createElement('button')
  const span = document.createElement('span');
  const newId = toDos.length + 1
  delBtn.innerText = "Delite"
  delBtn.addEventListener('click', deleteToDo)
  span.innerText = text;
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = newId
  toDoList.appendChild(li)
  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj)
  savaToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value; //input의 벨류
  paintToDo(currentValue) // input의 벨류를 콘솔로그로 확인
  toDoInput.value = ""; // 인풋의 새로고침
}


function loadToDos() {
  const loadedToDos = localStorage.getItem(ToDos_LS)
  if (loadedToDos !== null) {
    const paredToDos = JSON.parse(loadedToDos) //스트링을 오브젝트로 변환
    paredToDos.forEach(todo => { //각각의 todo를 돌림
      paintToDo(todo.text)
    });
  }
}

function init() {
  loadToDos();
  toDoform.addEventListener('submit', handleSubmit)
}
init()