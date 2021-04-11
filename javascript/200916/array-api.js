// Q1. make a string out of an array
{ //해당 배열을 하나의 열로 나열하라
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',') 
  //.join()은 하나의 열로 나열해줌
  console.log(result)
}

// Q2. make an array out of a string
{ //스트링을 배열로 바꿔라
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',', 2)
  //split은 스트링을 배열로 나열해줌
  //뒤에 있는 2는 써도되고 안써도되는데 배열의 갯수를 말해줌 4개 중 2개
  console.log(result)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{ //배열을 거꾸로 반환
  const array = [1, 2, 3, 4, 5];
    const result = array.reverse(',')
    //reverse는 배열 자체를 반대로 반환함 return값만 반대로 반환하는 것이 아님
    console.log(result)
    console.log(array) 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  /*const result = array.splice(0,2)
  //앞에 2개를 result의 배열로 옮김 array배열을 3개만 존재
  console.log(result)
  console.log(array)*/
  const result = array.slice(2,5)
  //인덱스가 4가 아닌 이유는 and인덱스라서 4가 배제되어 5라고 써야함
  //slice는 배열에 있는 값을 리턴함 splice처럼 옮기지 않음
  console.log(result)
  console.log(array)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find(function(Student){
       return Student.score === 90
    })
    console.log(result)
    /*find(function(students, index ~~){
        find는 해당 값을 찾을 때 까지 반환, 아니면 false, 맞으면 true값 true값을 찾으면 멈춤 첫 번째 하나만 찾음
        })*/                             
}

// Q6. make an array of enrolled students
{
    const result = students.filter(function(Student){
        return Student.enrolled === true
    })
    console.log(result)
    //해당 되는 값만 필터해서 다 보여줌 find()는 딱 그것만 찾는거 ? 같은 느낌이고 fiilter은 모든 해당하는 값을 다 필터해주는? 그런느낌
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map(function(students){
        return students.score
    })
    console.log(result)
    //배열 안에있는 요소를 한 가지씩 다른 것으로 변환
    //배열 안에 있는 요소들을 가공하여 그 값을 다시 배열로 만듦 배열을 만든걸 *2로 해서 출력도 가능함 map은 가공해야 할 때 유용할 듯
}

// Q8. check if there is a student with the score lower than 50
{
  /*  const result = students.find(function(students){
        if(students.score < 50){
            return students
        }
    })
    console.log(result)*/
     /*const result = students.some(function(students){
        students.score<50
        return students
    })
    console.log(result)*/
    const result = students.some((students) => students.score < 50)
    console.log(result)
    const result2 = students.every((students) => students.score >= 50)
    console.log(result2)
    // some : 하나라도 적용되는 것이 있으면 true로 반환 [하나라도 true]
    // every : 모든 학생이 50점 보다 높으면 true 한 명이라도 낮으면 false [모든 것이 true]
}
console.clear()
// Q9. compute students' average score
{
    const result = students.reduce(function(prev, curret){
        //prev는 앞에 A, crrunt는 B빼고 나머지 -> prev : B, crruent : C
        /*console.log('-=============***************')
        console.log(prev)
        console.log(curret)*/
        return prev + curret.score //전에 있던 값 + 현재 학생 스코어 값
    },0)
    //0을 적어줘야 처음에 0부터시작 0을 안넣으면 A부터 시작
    //reduceright는 반대서 부터 시작
    console.log(result/students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
   const result = students
   .map((students) => students.score)
   .filter(score => score>=50)
   .join()
   console.log(result)
    
    
    const result2 = students
    .map(function(Student){
        return Student.score
    })
    .filter(function(score){
        return score >= 50
    })
    .join()
    console.log(result2)
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(Student => Student.score)
    .sort((a,b)=>a-b) //점수가 크게 나오게 하는법은 b-a
    .join()
    console.log(result)
    //이전값과 현재값 전달 값이[a-b] -로 된다면 작은 수부터 정렬
}
