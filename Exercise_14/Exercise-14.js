// Use filter to create a new array with only the even numbers from an existing array.
const arr=[1,5,2,8,3,6,10,4];
console.log(arr.filter((element)=>element%2===0));

// Use map to create a new array with each number doubled.
console.log(arr.map((value)=>value*2));

// Use reduce to find the sum of all numbers in an array. 
const sumArr=arr.reduce((total,element)=>{
    return total+element;
},0);
console.log(sumArr);
