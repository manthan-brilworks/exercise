// Create a function that takes two numbers as parameters and returns their sum.
function add(num1,num2){
    return num1+num2;
}
let sum= add(10,20);
console.log("Sum of two number is:",sum);  //Sum of two number is:30

// Write a function that checks if a number is even or odd.
function evenoddCheck(num){
    if(num%2===0){
        console.log(`${num} is even number.`);
    }
    else{
        console.log(`${num} is odd number.`);
    }
}
evenoddCheck(17);  //17 is odd number.

//Experiment with function expressions and arrow functions.
// Function Expression
function subtraction(num1,num2){
    return num1-num2;
}

//Arrow function
const multiply=(num1,num2)=>  num1*num2;

// Arrow Function with Multiple Statements
const processNumbers = (num1, num2) => {
    const difference = subtraction(num1, num2);
    const product = multiply(num1, num2);
    return { difference, product };
};

console.log(subtraction(20,10));  //10
console.log(multiply(5,4));       //20
console.log(processNumbers(20,10));  //{difference:10, product:200}




