// Declare variables
let str = "This is String text";      // string
let num = 19;                   // number
let bint=2345678546372567n;     //bogint
let bool = true;                // boolean
let n = null;                   // null
let und;                        // undefined

// Check types
console.log(typeof str); 
console.log(typeof num); 
console.log(typeof bint);
console.log(typeof bool); 
console.log(typeof n); 
console.log(typeof und); 

// Change types
num = "This will change number to string";
console.log(typeof num); // "string"

bool = 100;
console.log(typeof bool); // "number"