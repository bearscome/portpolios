'use strict'
//function

/*함수 문법
    funtion name(a,b){
        body 
        return
    }
    함수는 한 개당 한 가지 일만 하도록 지정
    함수 이름은 동사 그리고 나노단위로 나눔
    JS에서 funtion은 오브젝트 변수에 함수 넣을 수 있음
*/

function printHellow(){
    console.log('Hellow')
}
printHellow();


function log(messege){
    console.log(messege)
}
log('hi')

//매개변수  parameters
function chageeName(obj){
    obj.name = 'coder'//obj의 이름을 코더로 변경
}
const abc={name:'abc'} //abc의 이름을 할당
chageeName(abc)
console.log(abc)

//기본 매개 변수default paramenters (add ES6)
function showMessage(message, from="unknown"){
    console.log(`${message} by ${from}`)
    //from의 값이 없으면 undifined인데 from에 unknown을 넣어 사용자가 알 수 있게 함.
}
showMessage('hi!')

//Rest parameters (add ES6)
///...args가 자식요소와도 오타가 나면 안됌
function printAll(...agrs){ ///...은 배열형태로 전달
    for(let i = 0; i < agrs.length; i++){
        console.log(agrs[i]);
    }
    
    for(const arg of agrs){ //args가 arg로 하나씩 넣음
        console.log(arg);
    }
    agrs.forEach((arg)=>console.log(arg))
}

printAll('dream', 'coding', 'ellie')


//6. Return a value
function sum(a, b){
    return a+b
}
const result= sum(3,5)
console.log(result)

//7 early return, earnly exit
// 나쁜 예
function upgradeUser(user){
    if(user.point>10){
        //실행 값 10보다 커지면 실행해라
    }
}

//좋은 예
function upgradeUser(user){
    if(user.point <= 10){
        return; //유저의 포인트가 10보다 작으면 바로 종료
    }
    //나머지 실행
}

/*function expression -> 함수식? 호이스트 가능 선언 전에 쓸 수 있음
    함수를 선언하는 동시에 변수에 넣음
*/
const print = function(){ //함수의 이름이 없으면 어나니머스 펀션 //함수의 이름을 써도 됌
    console.log('print')
}

const sumAgain = sum;
console.log(sumAgain(3,4))


//2. callback function using function
function randomQuize(answer, printYes, printNo){
    if(answer==='loveyou'){
        printYes()
    }else{
        printNo()
    }
}

const printYes = function(){
    console.log('yes!')
}

const printNo = function(){
    console.log('no!')
}

randomQuize('wrong', printYes, printNo);
randomQuize('loveyou', printYes, printNo);


//arrow funcion=> 함수를 줄이는 방법
const simplePrint = ()=>console.log('simplePrint')
const add = (a,b) => a+b;
const simpleMultipley = (a,b) => {
    //줄이 길어질 경우 return 필수
    return a+b;
}


//IIFE : 함수를 선언함에 동시에 호출하는 법
(function hellow(){
    console.log('IIFE')
})()

function calculate(sum, a, b){
    if(sum==='sum'){
        return a+b;
    }
}













