'use strict';

const num = 4; //레퍼런스의 값은 변경 불가. const num=4는 변수에 값이 할당되어서 그 값을 변경하지 못함 하지만 배열은 레퍼런스에 값을 넣는게 아닌 주소를 할당함 그래서 오브젝트는 변경이 가능함
const people = { //오브젝트를 만들 땐 const name = {} ; 
  age: 4,
  name: 'hysoung'
}
console.log(num)
//num = 6;
//console.log(num)
console.log(people)
people.age = 8; //레퍼런스를 담는 것이 아닌 주소를 담아서 레퍼런스를 통해 해당 오브젝트의 값을 변경할 수 있음
console.log(people.age)


//0, -0, false, NaN,undifined null, 숫자가 아니거나 비어있느건 false
//데이터가 있으면 true, []배열은 오브젝트여서 트루
let numq; //넘은 값이 없어서 false
if (null) {
  console.log('true')
} else {
  console.log('false')
}

function add(a, b) {
  const result = a + b;
  console.log(result)
}

function multiful(a, b) {
  const result = a * b;
  console.log(result)
}

function operations(Nums) {
  const result = Nums(55, 55)

}

operations(add)

// class counter {
//   constructor() {
//     this.counter = 0
//   }

//   increase(runs_5) {
//     this.counter++;
//     console.log(this.counter)
//     if (this.counter % 5 === 0) {
//       runs_5(this.counter)
//     }
//   }
// }

// function name(num) {
//   console.log(`${num} dd`)
// }


// const CoolCounter = new counter;
// CoolCounter.increase(name)
// CoolCounter.increase(name)
// CoolCounter.increase(name)
// CoolCounter.increase(name)
// CoolCounter.increase(name)
// CoolCounter.increase(name)
// CoolCounter.increase(name)
// CoolCounter.increase(name)

class counter {
  constructor(real5) {
    this.counter = 0;
    this.callback = real5;
  }

  increase() {
    this.counter++;
    console.log(this.counter)
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter)
    }
  }
}

function name(num) {
  console.log(`${num} dd`)
}


const CoolCounter = new counter(name);
CoolCounter.increase()
CoolCounter.increase()
CoolCounter.increase()
CoolCounter.increase()
CoolCounter.increase()
CoolCounter.increase()
CoolCounter.increase()
CoolCounter.increase()