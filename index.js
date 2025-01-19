// console.log("hello dipu");
// console.log('I am noob');
calculator=(x,y,op)=>{
    switch(op){
        case '+':
            return x+y;
        case '-':
            return x-y;
        case '*':
            return x*y;
        case '/':
            return x/y;
        default:
            console.log('enter valid operator');

    }
}

result = calculator(2,3,'*');
console.log(calculator(2,3,'*'));
console.log(calculator(10,2,'/'));


