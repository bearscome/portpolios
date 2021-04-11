'use strict'
/*
    objects
    one of the Javascript's data type
    a collection of related data and / or functionality 관련데이터 및 기능모음
    Nearly all objects in Javascript are instences of Object
*/

//1. Literals and properties
const obj1={}; //object literal'syntax
const obj2 = new Object(); //Object는 문법임; syntax 'object constructor syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}
print(ellie)

//width javascript magic(dynamically typed langguage) 동적인 언어
//can add properties later 나중에 속성을 추가 및 삭제 가능 비추천

ellie.hasjob = true;
console.log(ellie.hasjob)
delete ellie.hasjob;

//2. Computer properties
//key should be always string .이 아닌 [] 쓸 땐 ['name']써야함
console.log(ellie.name) //위와 아래와 같음
console.log(ellie['name']) //[]쓸 떈 . 지우고 ''스트링 타입으로 작성
ellie['hasjob'] = true;
console.log(ellie.hasjob)
// ['']는 동적이나 혹은 키가 뭘 받을지 모를 때 , 사용자의 인풋을 받아서 출력할 때
function printValue(obj, key){
    /*console.log(obj,key)*/ //이렇게 치면 안나옴 동적으로 변하는 값 못잡음
    console.log(obj[key])//함수 안에서는 스트링 타입으로 안적음
}
printValue(ellie, 'name'); //key는 항상 스트링 타입 eliie가 key 이렇게 치면 안나옴
printValue(ellie, 'age')


//3. property value shorthand
const person1 = {name : 'a', age:3} //사람을 하나씩 적을 때...
const person2 = {name : 'b', age:4} 
const person3 = {name : 'c', age:5} //함수를 만드는 것이 효율성 업
const person4 = new Person('d',6) // makePerson만 쓰는 것이 아니라 new makePerson이라고 작성해야함
console.log(person4)

//4. Constructor Function
function Peson(name,age){
    /*return{
        name : name,
        age : age
    }*/
    /*return{
        name,
        age
    }*/
    this.name = name; //this.name : name이 아니라 : -> = 로 바꿔야함
    this.age = age
}
const d = {name:'d',age:5}
//5 in operator: property existence check(key in obj)
console.log('name' in ellie) //엘리가 네임안에 있는지 확인 =true
console.log('age' in ellie)
console.log('radom' in ellie) //키값이 없으면 false로 출력
console.log(ellie.radom) //값이 없으며로 undefined

console.clear()//모든 콘솔 삭제
//6. for..in vs for..of
//for(let key on obj)
for(let key in ellie){ //ellie가 가지고 있는 키를 돌릴 때마다 key라는 지역변수에 할당이 되어짐
    console.log(key) //엘리가 가지고 있는 키는 name,age,hasjob
    //모든키를 알고 싶을 때 for(let key in 변수명)씀
}

//for (value of iterable) 배열, 배열 리스트 순차적으로 있는 것
const array = [1,2,3,4,5]
/*for (let i=0; i<array.length; i++){
    console.log(array[i])
}*/ // 구 시대적인ㅋㅋㅋㅋ
for (let value of array){
    console.log(value)
} // for (let value of obj)

/*
    7. Fun cloning
     Object.assign(dest, [obj1,obj2,obj3])
*/
console.clear();
const user = {name: 'ellie', age: '20'}
const user2 = user
user2.name = 'coder'
console.log(user) //user2에다 user값을 넣어서 user 값이 나옴

//old way
const user3 = {}
for (let key in user){
    user3[key] = user[key]
}
console.log(user3)

/*const user4 = {} user4의 값은 비워두고
Object.assign(user4, user); user4안에 user를 복사한다는 의미
console.log(user4)*/
const user4 = Object.assign({},user) 
console.log(user4)

//다른 예
const fruit1 ={color :'red'} 
const fruit2 ={color :'blue', size : 'big'} 
const mixed = Object.assign({},fruit1,fruit2) //뒤에 있는게 앞으로 덮어씌어 져서 color : blue, size : big으로 나옴
console.log(mixed)



const abd = {name : 'abc', age : 5}
console.log(abd)

class abc{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const lll = new abc('aaa',50)

console.log(lll)

function test(lastName,firstName){
    this.lastName = lastName;
    this.firstName = firstName;
}

const bc = new test('lee','hyo')

bc.hasjob = true;
console.log(bc.hasjob)

bc.lastName = 'siqkf';
const ccc = bc;
console.log(ccc)
ccc.lastName = 'sssss'
console.log(bc)









class me{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const alll = new me('ggg',55)
console.log(alll)

function abcd(persons){
    console.log(persons.name)
    console.log(persons.age)
}

const gg = {name : 'hi',age : 5 }

abcd(gg)



























