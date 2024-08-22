// Create a Set with a list of unique numbers and demonstrate adding, deleting, and checking for values.
const myArray=[1,2,3,4,5];
const mySet = new Set(myArray);
console.log(mySet);
//Adding value in set
mySet.add(6);
mySet.add(7);
console.log(mySet);
//Deleting from set
mySet.delete(3);
console.log(mySet);
//Checking for value
console.log(mySet.has(4));

// Create a Map to store key-value pairs and demonstrate adding, retrieving, and deleting entries.
const myMap= new Map([['firstName','Manthan'],['lastName','Thakar']]);
console.log(myMap);
//Adding in Map
myMap.set('age',20);
console.log(myMap);
//Retrieving 
console.log(myMap.get('firstName'));
//Deleting in Map
myMap.delete('lastName');
console.log(myMap);


// Iterate over the entries of a Map and log the key-value pairs. 
for (const [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}

