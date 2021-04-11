'use strict'
/*
    class: template
    object: instance of a class
    JS classes
     - ES6에 추가된 문법
     - prototype-based = ES5에 사용한 것을 문법화 한 것
     
     ㅅㅂ 문법이였어
     class A{
        constructor(B,C){
            this.B = B;
            this.C = B;
        }
        D(){
            console.log(`${this.A or B} 입니다`)
        }
     }
     const E = new A (D,F);
     console.log(E.B or E.C)
     B.D()
*/

/*
class person_2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak_2(){
        console.log(`이름은 ${this.name}, 나이는 ${this.age}`)
    }
}
const ll = new person_2('사람',25)
console.log(ll.age, ll.name)
ll.speak_2()
*/

//1. Class 문법
class person{
    //생성자
    constructor(name,age){
        //field
        this.name = name;
        this.age = age;
    }
    
    //method = 행동
    speak(){
        console.log(`${this.name}: hellow!`)
    }
    speak_age(){
        console.log(`성함: ${this.name}, 나이: ${this.age} `)
    }
}

const HS = new person('HS',20);
const ls = new person('ls',44);
console.log(HS.name);
console.log(HS.age);
HS.speak()
ls.speak_age()


//2. getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){ //값을 리턴
        return this._age;
    }
    set age(value){ /*값을 설정 값을 설정하기 때문에 벨류를 받아야함*/
        /*if(value < 0){
            throw Error('나이의 값은 -가 될 수 없습니다.')
        }*/
        return this._age = value < 0 ? 0 : value; 
        /*_age를 쓰는 이유는 계속 무한 반복되기 때문에 변수명을 다르게 설정
         age가 -가 된다면 0을 쓰거나 벨류 설정 값을 다시 넣음
        */
    }
}

const user1 = new User('steve', 'Job',-1); //나이를 -1로 설정 못하지
console.log(user1.age)


//3. Fields public, private
class Experiment{
    publicField = 2; //그냥적으면 퍼블릭필드 
    #privateField = 0; //내부적으로만 사용가능 사파리 지원안됌 최근에 추가됐음
}
const experiment = new Experiment();
console.log(experiment.privateField)

//4. static properties and methods
class Article{
    static publisher = 'dremas';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printpublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printpublisher();


//5. 상속과 다양성
class shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    shape_color(){
        console.log(`drawing ${this.color} 입니다.`)
    }
    shape_Area(){
        return this.with * this.height;
    }
}
class a extends shape{}
const abc = new a(20,20,'blue')
class b extends shape{
    shape_color(){
        super.shape_color()
        console.log('s')
    }
    shape_Area(){
        console.log(`${this.width * this.height/2}`);
    }
}
const efg = new b(60,60,'red')
abc.shape_color();
efg.shape_color();
efg.shape_Area();

//6. class checking : instance of]
console.log(abc instanceof shape); //상속한 값인지 확인

class shapes{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draws(){
        console.log(`${this.color}`)
    }
    multy(){
        console.log(`${this.height * this.width}`)
    }
}

class tkrkr extends shapes{}
const lll = new tkrkr(50,50,'red')
lll.multy()






















class add{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
        
    }
    darws(){
        console.log(`${this.color}`)
    }
    mmm(){
        console.log(`${(this.width * this.height)}`)
    }
}

class tkrkrgud extends add{}

const aaa = new tkrkrgud(20,20,'red')
aaa.mmm()



























