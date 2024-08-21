// Create an array of numbers and sort them in ascending and descending order.
const arr=[5,8,1,9,3,4,2];
console.log(arr);
//Sorting them in ascending order
const aoarr=arr.sort((a,b)=>(a-b));
console.log(aoarr);
//Sorting them in descendindg order
const doarr=arr.sort((a,b)=>(b-a));
console.log(doarr);

//Join an array of words into a single string with spaces in between.
const words = ["Hello", "world", "this", "is", "Example","Array"];
const word=words.join(" ");
console.log(word);

//Iterate over an array using forEach and display each element. 
words.forEach((element,index)=>{
    console.log(`${element} at ${index} index`);
});