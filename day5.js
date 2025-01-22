
// console.log('hi')
// function longTask() {
//     for (let i=0;i<1e9;i++){

//     }
//     console.log("long task completed");
// }
// longTask();
// console.log("end");


//my doubt about it
// console.log('first');
// setTimeout(display,2000);
// console.log("last");

// function display(){
//     let a = print(5);
// }
// function print(a){
//     console.log("timeout inside fucntion",a);

// }

//async/await





//builtin module of node JS
// 1. Path module
// const path = require('path');

// const filePath = '/home/user/project/index.js';
// console.log()


//home
//callback hell
// const getData=(dataID,getNextData)=>{
//     setTimeout(()=>{
//         console.log("data",dataID);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// })
//example of promise ("this mainly done by api bcz api will return promise 
// to us and then we will work with returned prmoise")
// function getData(dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",dataID);
//              resolve("success");
//         },5000);
//     });

// }



//a good example
// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          console.log("data1");
//         resolve("success");
//         },4000);
//     });
// }

// function async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2")
//         },4000);
//     });
// }

// console.log("fetching data1...")
// async1().then(()=>{
//     console.log("fetching data2...");
//     async2();
// });

//promise chaining
// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve("success");
//         },2000);
//     });
// }


// getData(1).then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });


//async await

// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve('success');
//         },2000);
//     });
// }

// async function getAllData(){
//     console.log('fetching data1...')
//     await getData(1);
//     console.log('fetching data2...')
//     await getData(2);
//     console.log('fetching data3...')
//     await getData(3);
//     console.log('fetching data4...')
//     await getData(4);
//     console.log('fetching data5...')
//     await getData(5);
//     console.log('fetching data6...')
//     await getData(6);

    
// }
// getAllData();


//IIFE: Immediately Invoked Function Expression
// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve('success');
//         },2000);
//     });
// }

// (async function (){
//     console.log('fetching data1...')
//     await getData(1);
//     console.log('fetching data2...')
//     await getData(2);
//     console.log('fetching data3...')
//     await getData(3);
//     console.log('fetching data4...')
//     await getData(4);
//     console.log('fetching data5...')
//     await getData(5);
//     console.log('fetching data6...')
//     await getData(6);
// })();



//fetch api
const url = "https://cat-fact.herokuapp.com/facts";

const getFacts= async ()=>{
    console.log('fetching data...')
   let response = await fetch(url);
   let fact = await response.json();
   console.log(fact[1].text);
}

getFacts();