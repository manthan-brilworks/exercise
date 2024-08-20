//Declaration
var varVariable;
let letVariable;
const constVariable="This is const variable text"; //'const' declarations must be initialized

//Assigning different values
varVariable="This is var variable text";
letVariable = "This is let Variable text";

//console that assigning value
console.log("Before reassigning var variable:",varVariable);
console.log("Before reassigning let variable:",letVariable);
console.log("Before reassigning const variable:",constVariable);

//reassigning different values
varVariable = "This is var Variable reassigning text";
letVariable = "This is let Variable reassigning text";
constVariable = "This is const Variable reassigning text";
//about will throw an error because const cannot reassigning the value

console.log("After reassigning var variable:",varVariable);
console.log("After reassigning let variable:",letVariable);
console.log("After reassigning const variable:",constVariable);
// Above console log throw an error :- Uncaught TypeError: Assignment to constant variable.