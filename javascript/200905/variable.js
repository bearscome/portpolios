//1. 'use strict' vanila javascript
'use strict';


//2. variable -> 읽고 쓰기 가능 [var ]
//let은 ES6에 추가된 변수명     let은 IE지원 안됌 바벨을 이용하여 ES5 다운그레이 해야함
let happy="sorry" //전역변수
{
    let name="a";
    console.log(name);
    name='hi';
    console.log(name)
} //지역변수라고 생각하면 될 듯
console.log(name)

//전역변수가 밑에 있고 콘솔로그가 위에서 호출하면 호출안됌
//스크립트는 위에서 아래로 읽으니까 name을 'a'로 설정해도 name을 밑에서 다른 걸로 선언하면 밑에있는 선언된 값이 나옴
//그리고 블록요소안에 있어서 밖에서 호출할 경우 호출되지 않음 console.log(name)해도 안나옴


//3. const 읽기
//let 과 다르게 불변하지 않는 값 let은 아래에서 유동적으로 값을 변경이 가능했지만 const는 값이 고정되었있음 LOCK!!!!
//불변의 값이라고 생각하면 이해가 쉬움
const const_1="hellow"
const const_2="hi"
console.log(const_2)


// 변수 값이 변경되지 않으면 const를 쓰고, 값이 변경되어야 한다면 let을 사용해야 한다.

//4. variable types 
//primitive, single item : number, string, boolean, null, undefind symbol 더 이상 나눌수 없는 값들
//object, box container :여러개를 묶어서 한 박스로 관리하는 것
//function, first-class function 함수도 데이타 타입으로 가능
const count = 17; //integer 정수
const size = 17.1; //decimal number 소수

console.log(`value:${count}, type: ${typeof count}`); /*``~~*/
console.log(size, typeof size);


// number special numeric vaule[특수 값]:infinity, -infinity, NaN
const infinity = 1/0; //무한대 숫자를 0으로 나누기 때문에 무한
const negativeinfinity = -1/0; //-무한대  -infinity
const nAn = 'ㄴㄴ'/0; // 값을 찾을 수 없음 단어를 0으로 나눌 수 없음
console.log(infinity)
console.log(negativeinfinity)
console.log(nAn)
//bigInt (새로나온거, 아직쓰지 마셈)
const bigInt=123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)


//string 문자열
const char ='c';
const brendan = 'brendan';
const greeting = 'hellow ' + brendan; //변수안에 단어하고 변수를 넣을 수 있음
console.log(`value: ${greeting}, type:${typeof greeting}`)
const hellowBob=`hi ${brendan}!`; //template literals (string) ``${} 이거 사용한느거 말하는 거
console.log(`value: ${hellowBob}, type: ${typeof hellowBob}`)


//boolean
//flase:0, null, undefined,NaN,''
//true: anyother value
const canRead=true;
const test = 3<1; //false
console.log(`value: ${canRead}, type:${typeof canRead}`)
console.log(`value: ${test}, type:${typeof test}`)

//null, undefined
//둘다 값은 값으로 보지만 다름, null은 문자의 값을 가지고 있지만 언디파인디드는 값이 아예 할당되어 있지 않음 null="null"인거 같고 undefined는 ="" 공백이라고 생각하면 편할 듯


//symbol 고유한 식별자가 필요한...? 아이디 값이 같으면 식별자순위를 정하기 위해..?
const symbol1=Symbol('id')
const symbol2=Symbol('id')
//값이 다름
console.log(symbol1===symbol2) //같은 값이라고 안나오고 다르다고 나옴 동일한 스트링을 써도 다르다고 나옴..
const sSymbol1=Symbol.for('id');
const sSymbol2=Symbol.for('id');
console.log(sSymbol1===sSymbol1) //같은 값을 쓰기 위해서는 Symbol.for을 쓰면 true값이 나옴
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)// console.log(`value: ${symbol1}, type: ${typeof symbol1}`) 이렇게 적으면 안나옴 symbol을 스트링으로 만들어줘야 콘솔 값 나옴 symbol1.description


//5. Dynamic typing: dynamically typed language [동적언어]
let text = "hello"
console.log(text.charAt(0)) //text의 첫 번째 인덱스 호출
console.log(`value: ${text}, type: ${typeof text}`) // hellow, string 으로 나옴
text = 3;
console.log(`value: ${text}, type: ${typeof text}`) //let 동적변수임으로 text가 원래 hellow였는데 밑에서 숫자로 변경하니 숫자로 바뀜 스트링에서 넘버로 바뀌는 현상 발생
text = '8' / '4'
console.log(`value: ${text}, type: ${typeof text}`) //ㅋㅋㅋㅋ 스트링으로 선언하여 나누면 자바스크림트는 스트링으로 봤는데 나누기가 있음 근데 또 스트링이 숫자네? 그러니까 나눠버림!
//console.log(text.charAt(0)) 
// 개발자가 text란 변수를 보고 텍스트인줄 알고 인덱스를 호출하지만 이미 text는 숫자라서 찾을 수 없음... 변경된 값이라서 이미 결과는 바이바잉~ 그래서 나온게 타입스크립트래.. scss랑 비슷한거 같은디?

const abc = {name:'abc', age:15}; //const라서 변하지 않고, 배열 또한 안바뀜
console.log(abc)
abc.name="def"
console.log(abc)
//const로 지정했는데 배열에 있는 값을 바꿀수가 이쎈?
 












