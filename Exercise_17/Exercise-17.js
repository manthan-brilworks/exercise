// Write two functions: one declared with function and one with a function expression, and observe hoisting behavior.
//Function Declaration
functionDeclaration();
function functionDeclaration() {
  console.log("This is Function Declaration");
}
//Function Expression
//functionExpression();  //ReferenceError: Cannot access 'functionExpression' before initialization
const functionExpression = function () {
  console.log("This is Function Expression Function");
};
functionExpression();

// Create a function that accepts a variable number of arguments and logs each one.
function logArguments(...arg) {
  console.log(arg)
  arg.forEach((element,index) => {
    console.log(`index: ${index} Element:${element}`);
  });
}
logArguments(1,2,"Hello",90);

// Use the arguments object to sum all the passed arguments in a function. 
function sum() {
    sum=0;
    for (let i = 1; i <=arguments.length; i++) {
        sum+=i;
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6,7));

