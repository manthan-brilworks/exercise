// Create a program that takes a user’s age and displays whether they are a child, teenager, or adult.
let age= prompt("Enter the user age");
if (age < 0) {
     console.log("Invalid age");
} else if (age <= 12) {
     console.log("You are a child.");
} else if (age <= 18) {
     console.log("You are a teenager.");
} else {
     console.log("You are an adult.");
}

// Write a program that uses a for loop to display numbers from 1 to 10.
for(let i=1;i<=10;i++){
    console.log(i);
}

//Implement a switch statement to handle different cases for a variable.
let num1=parseInt(prompt("Enter Number 1"));
let num2=parseInt(prompt("Enter Number 2"));
let choice=prompt("Enter the choice (Addition,subtraction,division,multiplication)");
switch(choice.toLowerCase()){
    case 'addition':
        const add =(num1,num2) => num1+num2 ;
        console.log("Addition is:",add(num1,num2));
        break;
    case 'subtraction':
        const sub =(num1,num2) => num1-num2 ;
        console.log("Substraction is:",sub(num1,num2));
        break;
    case 'division':
        const div =(num1,num2) => num1/num2 ;
        console.log("Division is:",div(num1,num2));
        break;
    case 'multiplication':
        const multi = (num1,num2) => num1*num2 ;
        console.log("Multiplication is:",multi(num1,num2));
        break;
    default:
        console.log("Enter valid choice");
        break;
}