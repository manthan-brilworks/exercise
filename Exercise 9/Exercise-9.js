//Create an array of numbers and log its length.
const arr = [1,2,3,4,5,6];
console.log(arr.length);

// Access individual elements of the array and modify them.
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]+2;
}
console.log(arr); //[3, 4, 5, 6, 7, 8]

// Add and remove elements using push, pop, shift, and unshift.

//Push add an elemet at last position of array
arr.push(9);
console.log(arr); //[3, 4, 5, 6, 7, 8, 9]

//pop remove an element from last index
arr.pop()
console.log(arr); //[3, 4, 5, 6, 7, 8]

//shift remove an element from starting index 
arr.shift();
console.log(arr);  //[4, 5, 6, 7, 8]

//unshift add an element in starting of array
arr.unshift(3);
console.log(arr); //[3, 4, 5, 6, 7, 8]


