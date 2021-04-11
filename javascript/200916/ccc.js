class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90 //.find

// Q6. make an array of enrolled students //filter

// Q7. make an array containing only the students' scores //map
// result should be: [45, 80, 90, 66, 88]

// Q8. check if there is a student with the score lower than 50
//some = 하나라도 맞으면, every 모든것이 맞으면

// Q9. compute students' average score //reduce

// Q10. make a string containing all the scores
// const result = students
//   .map((students) => students.score)
//   .sort((a, b) => a - b)
//   .join();
// console.log(result);

// Q2. make an array out of a string
{
  const array = [1, 2, 3, 4, 5];
  /*const result = array.splice(0,2)
  //앞에 2개를 result의 배열로 옮김 array배열을 3개만 존재
  console.log(result)
  console.log(array)*/
  const result = array.slice(2, 5);
  //인덱스가 4가 아닌 이유는 and인덱스라서 4가 배제되어 5라고 써야함
  //slice는 배열에 있는 값을 리턴함 splice처럼 옮기지 않음
  console.log(result);
  console.log(array);
}
