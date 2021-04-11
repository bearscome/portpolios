"use strict";
//javascript Object Notation

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabit = {
  name: "tori",
  color: "white",
  size: null,
  birthday: new Date(),
  jump: function name(name) {
    console.log(`${this.name} can jump`);
  },
};

json = JSON.stringify(rabit);
console.log(json);

json = JSON.stringify(rabit, ["name", "color"]); //이름만 출력하고 싶을 때
console.log(json);

json = JSON.stringify(rabit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === "name" ? "ellie" : value; //name을 바꿈
});
console.log(json);

//2. JSON to Object
//parse(json)
console.clear();

json = JSON.stringify(rabit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, vlaue: ${value}`);
  return key === "birthday" ? new Date(value) : value;
});
console.log(obj);
rabit.jump();
//obj.jump(); //json을 만든 후 다시 parse로 만들면 해당 데이터는 스트링으로 되어서 오류가남

console.log(rabit.birthday.getDate());
//console.log(obj.birthday.getDate()); // birthday가 스트링 타임이기 때문
