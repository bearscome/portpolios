'use strict';

//1. Declaration 배열 선언 및 만드는 법
/*const arr1 = new array();*/ //첫 번째 방법
const arr2 = [1,2] //두 번째 방법 흔히 씀

//2. Index position
const fruits = ["사과","바나나"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]); //제일 마지막 인덱스 length의 마지막에서 -1 

//3. Looping over an array
//print all fruits
//3-1 for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]) //fruits의 인덱스 
}

//3-2 for of
for(let fruit of fruits){ //fruit 를 만들고 안에 fuits를 넣음
    console.log(fruit) //fruit 호출
}

//3-3 for.each
/*fruits.forEach(function(fruits,index,array){
    console.log(fruits,index,array)
})이게 더 편한거 같은데..??*/
fruits.forEach((fruits/*,index,array*/) =>console.log(fruits,/*index,array*/)) //줄이는 법

console.clear()

const ssss = ellie.age.filter(function(){
    
})

//4. addtion, deletion, copy 추가,삭제,복제
// push : 맨 뒤에 것 추가하고, 
fruits.push('블루베리','배') //뒤에다가 하나씩 추가 append
console.log(fruits)
// pop: 맨 뒤에 것을 삭제
fruits.pop(); //맨 뒤에서 부터 하나씩 삭제
console.log(fruits)
//unshift: 맨 앞에서 부터 추가 prepend라고 생각하면 될 듯
fruits.unshift('초콜렛','음식')
console.log(fruits)
//shift: 맨 앞에서 부터 삭제
fruits.shift()
console.log(fruits)

console.clear()
/*!!! shift, unshift는 pop.과 push보다 상대적으로 엄청 느리다
    pop과 push는 뒤에 있는걸 그냥 생성 및 삭제를 하면 되지만 unshift와 shift는 앞에 있는 인덱스를 옆으로 옮기면서 생성해야 하기 때문에 상대적으로 느리다.
*/

fruits.splice(1) //하나만 지정하면 지정된 인덱스 뒤로는 다 삭제한다. 0부터 시작하면 모든게 삭제, 1부터는 1부터 뒤로 삭제
console.log(fruits)
fruits.push('이어폰','핸드폰','지갑')
console.log(fruits)
fruits.splice(1,1)//인덱스 1번인 이어폰이 삭제됨
console.log(fruits)
fruits.splice(1,0,'aa','bb') // 삭제된 이어폰 자리에 aa,bb추가됨
console.log(fruits)

//combine two arrays 두개의 배열을 합칠 땐 concat
const fruits2 = ['피곤해','재밌어']
console.log(fruits2)
const NewFruits = fruits.concat(fruits2);
NewFruits.forEach(function(a){
    console.log(a)
})

console.clear();

//5. Searching 검색 법 
console.log(fruits)
//indexOf : 맨 앞에 있는 인덱스부터 순차적으로 찾아줌
console.log(fruits.indexOf('aa'))
console.log(fruits.indexOf('bb'))

//includes : 현재 배열에서 해당 문자가 있는지 검사 있으면 true
console.log(fruits.includes('aa'))//true
console.log(fruits.includes('ddddd'))//false

//lastInedxOf : 제일 마지막에 있는 값을 찾아줌
fruits.push('aa')
console.log(fruits)
console.log(fruits.lastIndexOf('aa')) 

//중간 값은 어떻게 찾지..?

console.log(fruits.filter())






















