// Write a function that intentionally throws an error and use try and catch to handle it.
function errorCatch(num){
    let div=num/0;
    throw new Error('Division by zero is not allowed');
}

try{
    let num=10;
    console.log(errorCatch(num));
    
} catch(e){
    console.log('This is catch block');
    console.log(e);
}


//Experiment with variable scope by declaring variables inside and outside of functions and blocks.
//Inside the Function 
function insideVariable(){
    let variableA='This is inside Function variable'; //This is Local Variable
    console.log(variableA);
}
insideVariable();

//Inside Outside block
function insideBlock(){
    if(true){
        let variableB='This is block level variable'; //This is Block scope variable
        console.log(variableB);
    }
    // console.log(variableB); //ReferenceError: variableB is not defined
}
insideBlock();

//Outside the function
let variableC = 'This is Outside Varible'; //This is global scope variable 
function outsideVariable(){
    console.log(variableC);
}
outsideVariable();


// Create an object with a method that uses this to refer to the object’s properties.
const obj={
    brand:'Lenovo',
    model:'ThinkPadE14',
    displayInfo(){
        return `This is ${this.brand} laptop and ${this.model} model`
    }
};

console.log(obj.displayInfo());
