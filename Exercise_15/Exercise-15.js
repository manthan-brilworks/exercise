//Create a new array that combines two existing arrays using the spread operator.
const arr1=[3,4,5,6];
const arr2=[7,8,9,10];
const arr3=[...arr1,...arr2];
console.log(arr3)

// Create a copy of an object and modify one of its properties without affecting the original object.
// Original object
const originalObject = {
    name: 'Manthan',
    age: 19,
    city: 'Ahmedabad'
};
const copiedObject = { ...originalObject };
copiedObject.age = 20;
console.log('Original Object:', originalObject);
console.log('Copied Object:', copiedObject);


//Use the spread operator to pass multiple arguments to a function.
function sum(...num){
    return num.reduce((total,element)=> total+element,0);
}
console.log(sum(2,3,4,5));