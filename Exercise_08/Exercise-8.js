const person={
    name:'Manthan',
    age:20,
    email:'manthn.t@brilworks.com',
     getinfo(){
        return `Person's Name is ${this.name} ,age is ${this.age} , email id ${this.email}`;
    }
};

console.log(person.name);
console.log(person["name"]);
console.log(person.age);
console.log(person["age"]);
console.log(person.email);
console.log(person["email"]);

console.log(person.getinfo());
