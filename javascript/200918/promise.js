"use strict";

//promise is a JavaScript object callback 함수 대체? 대응?
//promise는 class
//1. state : 상태, 프로세스가 수행 중인지, 기능수해이 완료되어 성공되었는지 실패되었는지 pending (수행중) ->fulfilled or rejected(완료 혹은 실패)

//2. producer : 해당하는 데이터를 만드는~, customer 원하는 데이터를 소비하는~

//1.Producer
//새로운 프로미스가 만들어 질 때는 엑시큐터함수가 자동으로 바로 실행
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  //프로미스가 만들어지는 순간 바로 수행
  //사용자가 원하는 행동을 수행하여야 하는데 프로미스를 사용하면 안되겠지?
  console.log("doing something ===");
  setTimeout(() => {
    resolve("ellie");
    //reject(new Error("no network"));
  }, 2000);
});

//2. consumers : then[수행이 정상적으로 실행이 된다면], catch[수행이 실패한다면], finally[성공과 실패없이 보여주는]

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//3.Promise chaining
//then은 값을 바로 전달해도 되고, 또 다른 비동기 프로미스를 전달해도 됨

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4.Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭", 1000));
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen}=>알`), 1000));
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 닭`, 1000));
  });

getHen()
  .then(getEgg) //한가지만 받는 경우 이렇게 생략이 가능
  .then((egg) => cook(egg))
  .catch((error) => {
    return "빵이다 새꺄"; //getEgg에서 에러가 난다면 빵으로 대체 getEgg바로 후 실행
  })
  .then((meal) => console.log(meal))
  .catch(console.log);


class Userstorage {
  async login((resolve, reject) => {
    setTimeout(() => {
      if (
        (id == 'hyosung' && password = "dream")
        ){
      resolve(id)
    }else {
      reject(new Error('Error'))
    }
  }, 2000);
    })
  }