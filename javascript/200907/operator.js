'use strict';
//1. string concatenation
console.log('my' + ' cat') //+를 사용하면 문자끼리 합칠 수 있음
console.log('1' + 2) //문자와 숫자를 더하면 문자열로 변환되어 나옴
console.log(`string 1 + 2  ${1+2}`) //``사용하면 특수문자 사용가능

//2 숫자 연산
console.log(1 + 1); //더하기
console.log(1 - 1); //빼기
console.log(1 / 1); //나누기
console.log(1 * 1); //곱하기
console.log(5 % 2); //나누고 나머지 값
console.log(2 ** 3); //승 2의 3승

//3 증감 및 감소 연산자 Increment and decrement operators
let counter = 2;
const preIncrement = ++counter //증감 counter = counter + 1 변수 안에 담기 전에 증감
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)// 업데이트하고 할당을 함
const postIncrement_2 = counter++; // 변수 담고나서 증감
console.log(`preIncrement: ${postIncrement_2}, counter: ${counter}`)// 할당을 하고 업데이트함

const preDecremnent = --counter;
const postDecremnent = counter--;
console.log(`preDecremnent: ${preDecremnent}, counter: ${counter}`)
console.log(`postDecremnent: ${postDecremnent}, counter: ${counter}`)


//4 할당 연산자 Assignment operators
let x=3;
let y=4;
x+=y; // x = x + y
x-=y; // x = x - y
x*=y; // x = x * y
x/=y; // x = x / y


//5 비교 연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6 ||(or), &&(and), !(not)
const value1 = true; //false
const value2 = 4 < 2  //true

// ||(or)
console.log(`or:${value1 || value2 || check()}`) //false, false, true
// or 연산자는 처음에 true 값이 나오면 거기서 바로 스탑, 연산이 많은 것은 뒤로 배치하고 가벼운 것들은 되도록 앞으로 배치하여 코드를 효율적으로 작성해야함


//&&(and), 
console.log(`and: ${value1 && value2 && check()}`)
// 3가지가 다 같아야 실행됌

//!(not) 은 값을 반대로 해줌


function check(){
    for (let i = 0; i<10; i++){
        //waisting time
        console.log('안녕')
    }
    return true;
}


//7 equality 값이 같은건지 확인하는..
const stringFive='5';
const numberFive=5;
//오브젝트까지 검사안함 스트링 안에 5가 있어서 5라고 생각하여 검사
console.log(stringFive==numberFive); 
console.log(stringFive!=numberFive);
//오브젝트까지 같은지를 검사
console.log(stringFive===numberFive);
console.log(stringFive!==numberFive);

//오브젝트 리퍼런스
const abc1 = {age:'3'}
const abc2 = {age:'3'}
const abc3 = abc1;
console.log(abc1==abc2) // false가 나오는 이유는 저장된 공간이 다르기 때문
console.log(abc1===abc2) // false가 나오는 이유는 저장된 공간이 다르기 때문
console.log(abc1===abc3) // 같은 레퍼런스를 사용함으로

//equality
console.log( 0 == false); //true false랑 0이랑 같음
console.log( 0 === false); //false 타입이 다름
console.log( '' == false); //true 빈값 같은말 
console.log( '' === false); //false 빈값 타입이 다름
console.log( null == undefined); //true 같은말
console.log( null === undefined); //false 빈 값, 찾지 못함

//8 if문
const name = "hi"
if(name==="hi"){
    console.log("hellow")
}else if(name==='hellow'){
    console.log('hi')
}else{
    console.log('defined')
}


//9 ternary operator: ? [삼항연산자]
//문법 : condition ? value1 : value2;
console.log(name=== 'hi' ? 'yes':'no') //true 면 yes , false 면 no

//10 switch statement
//if문 작성할 때 else if가 많이 사용되면 switch문 고려, 벨류체크할 때, 타입스크립트 안에 다항계산 할 때
const browser = "Chrome";
switch (browser){ //browser 가
    case 'IE':  //IE이 라면 케이스라고 생각
        console.log('IE 입니다.');
        break; //참이라면 끝
    case 'Chrome':
    case 'Firefox':
    default:
        console.log('크롬아니면 파이어폭스')
        break;
}

//11 Loops 반복문
let i = 3; //0이 되면 멈춤 그래서 0을 출력 안함 --i;
while(i>0){
    console.log(`'while :'  ${i}`)
    i--; 
}

do{
    console.log(`'Do while : '${i}`)
    i--;
}while(i>0) //0까지 출력하고 콘솔에 출력 후 끝남 i--

for(i = 3; i > 0; i-- ){
    console.log(`'for : '${i}`)
}

for(let i = 3; i > 0; i = i-2 ){
    console.log(`'for let : '${i}`)
}

//nested loops 중첩반복문
for (let i = 0; i < 10; i++){
    for (let j = 0; j<10; j++){
        console.log(`i: ${i}, j:${j}`)
    }
} //i가 1이면 J가 10번 돌고 난 후 i=2가 되면 또 10번 돔

for(i=0; i<11; i++){
    if(i%2!==0){
        continue; //나머지 값이 0이 아닌 면 넘어감 [스킵]
    }
    console.log(`'continue q1 :'${i}`)
}

for (i=0; i<10; i++){
    if(i>8){
        break;//완전히 멈춤
    }
    console.log(`'break q2: '${i}`)
}






















































