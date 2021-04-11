//async & await
//clear style of useing promise

//1. async
//  async를 함수 앞에 쓰면 자동으로 Promise로 바뀜
async function fethUser() {
  //time of doimgsomethins..to network 10secs
  //resolve('lhs')

}
const user = fethUser()
user.then(console.log)
console.log(user)

// 2.await
function delay(ms) {
  return new Promise((resolve) => setTimeout((resolve), ms))
}

async function getApple() {
  await delay(2000);
  return '사과'
}

async function getBanana() {
  await delay(1000);
  return '바나나'
}

async function fruit() {
  const applePromise = getApple(); //애플,바나나 프로미스를 만들고 만들자 마자 병렬적으로 실행
  const bananaPromise = getBanana(); //각각으로 수행 가능
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`
}

fruit().then(console.log)


//3. useful Promise APIs 위에 있는 function fruit 보다 더욱 깔끔
function pickAllfruit() {
  return Promise.all([getApple(), getBanana()]) //배열형태로 asyncbanana,asyncapple 을 Promise.all([]배열형태로) 불러옴
    .then(fruits => fruits.join(' + ')); //그리고 fruit라는 접시에 다 담아서 스트링 형태로 변형
}

pickAllfruit().then(console.log)

function pickOnlyone() { //둘 중 제일 빠르게 나오는 것을 호출 race 그대로 ;
  return Promise.race([getBanana(), getApple()]) //then을 안써도 되나봄
}
pickOnlyone().then(console.log)


class userStorage {
  async loginUser(id, password) {
    if (id == "hyosung" && password == "dream") {

    }
  }
}




