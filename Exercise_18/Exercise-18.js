// Create a function that uses the rest operator to accept an arbitrary number of arguments and returns their sum.
function sum(...arg){
    return arg.reduce((total,current)=>  total+=current,0);
}
console.log(sum(1,2,3,4,5));

// Write a function with a default parameter and test it by calling the function with and without arguments.
function greet(name="World"){
    console.log("Hello",name);
}
greet('User'); //Function Call with arguments
greet();        //Function Call without arguments

// Experiment with combining rest parameters with other named parameters.
function combining(a,b,...rest){
    console.log('Named Parameter',a);
    console.log('Named Parameter',b);
    console.log('Rest parameters',rest);
    console.log([a,b,...rest]);
}
combining(1,2,3,4,5);
