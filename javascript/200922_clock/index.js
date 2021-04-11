

const clockContainer = document.querySelector('.js_clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const minetes = date.getMinutes();
  const hours = date.getHours();
  const seceond = date.getSeconds();
  clockTitle.innerHTML = `${hours < 10 ? `${hours < 10}` : hours}:${minetes < 10 ? `0${minetes}` : minetes}:${seceond < 10 ? `0${seceond}` : seceond}`
}
function init() {
  getTime();
}
setInterval(() => {
  init()
}, 100);
//init();


