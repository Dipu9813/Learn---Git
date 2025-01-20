// of gives us direct value whereas in (for loopint in array)
// CLOSURE example
// const sum = (a, b) => {
//     return a + b;
// }

// function firstfunction() {
//     console.log("This is first function");
//     function secondfunction() {
//         console.log("This is second function");
//     }
//     return secondfunction;

// }
// // firstfunction();
// const closure = firstfunction();
// console.log(closure);
// closure();
//closure is a function that makes use of variables defined in outer function that have previously returned
// const incrementDecrement = () => {
//     let count = 0;
//     return {
//         increment: () => {
//             count++;
//             return count;
//         },
//         decrement: () => {
//             count--;
//             return count;
//         },
//         getCount: () => {
//             return count;
//         }
//     }
// }
// const counter = incrementDecrement();
// console.log(counter);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.getCount());


//call back
// const sum=(a,b,callback)=>{
//     let result = a+b;
//    callback( result);
// }
// const printfunction=(sum)=>{
//     console.log("the sum is ",sum);
// }
// sum(5,5,printfunction);

//PROMISE 
//pending, resolved, rejected
//banmala
