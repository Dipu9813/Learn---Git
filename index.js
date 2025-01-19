//task 1
// for (i=0;i<=50;i++){
//     if (i%2==0)
//     console.log(i);
// }
//task 1


//task 2
// calculator=(x,y,op)=>{
//     switch(op){
//         case '+':
//             return x+y;
//         case '-':
//             return x-y;
//         case '*':
//             return x*y;
//         case '/':
//             return x/y;
//         default:
//             console.log('enter valid operator');

//     }
// }

// result = calculator(2,3,'*');
// console.log(calculator(2,3,'*'));
// console.log(calculator(10,2,'/'));
//task 2


//task 3
// let num = 5;
// let str = "Dipu";
// let is_student = true;
// const student ={
//     name:"Dipesh Singh",
//     Roll_no:"KCE080BCT008",
//     semester: 3,

// };
// let nul;
// let any=null;
// console.log(typeof(num));
// console.log(typeof(str));
// console.log(typeof(is_student));
// console.log(typeof(student));
// console.log(typeof(nul));
// console.log(typeof(any));
//task 3


//task 4
// class Person {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     introduce(){
//         console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// const pobj= new Person("Dipesh Singh",18);
// pobj.introduce();
//task 4


//task 5
// var a=5;
// let b=10;
// const c=15;
// var a = 20;//var can be redeclared and reassigned
// //let b = 25; let cannot be redeclared but can be reassigned to new value like->
// b=25;
//c=30; tonst cannot be reassigned
//task 5


//task 6
// findMax=(arr)=>{
//     return Math.max(...arr);
// }
// let numbers =[1,2,3,4,5,8,69,150,45];
// console.log(findMax(numbers));
//task 6


//task 7
// class car{
//     constructor(brand,model){
//         this.brand=brand;
//         this.model=model;
//     }
//     getDetails(){
//         console.log(`This car is a ${this.brand} ${this.model}`);
//     }
// }
// const carobj = new car("Rolls Royce","Ghost");
// carobj.getDetails();
//task 7


//task 8
// getSquare=(n)=>{
//     return n*n;
// }
// console.log(getSquare(5));
//task 8


//task 9
// let names = ['Dipesh','Deepak','Manee','Piyush','Sajan','Rijan'];
// names.forEach(nam=>{
// console.log(nam)
// });
//task 9


//task 10
// let nums = [1,2,3,4,5,6,7,8,9];
// newArray=nums.filter(num=>num%2!==0);
// console.log(newArray);
//task 10


//task 11
// fav_color = 'red';
// fav_food = 'mo:mo';
// console.log(`My favourite color is ${fav_color} and my favourite food is ${fav_food}.`);
//task 11


//task 12
// class Book{
//     constructor(title,author,year){
//         this.title=title;
//         this.author=author;
//         this.year=year;
//     }
//     displayDetails(){
//         console.log(`The author of the book ${this.title} is ${this.author} which was published in ${this.year}`);
//     }
// }

// const abc = new Book('ABC','Dipesh',2020);
// abc.displayDetails();
//task 12


//task 13
let inputArr = [5,6,7,8,9];
let outputArr = inputArr.map(num =>num*2);
console.log(outputArr);
//task 13