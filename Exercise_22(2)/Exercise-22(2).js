function Shape(){}
Shape.prototype.area=function(){
    throw new Error('Area method must be implemented.')
}

function Square(length){
    this.length=length;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

function Rectangle(length,width){
    this.length=length;
    this.width=width;
}
Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.constructor=Rectangle;

Square.prototype.area= function(){
    return this.length*this.length;
}

Rectangle.prototype.area=function(){
    return this.length*this.width;
}

const sq=new Square(5);
const rect=new Rectangle(5,10);

console.log(`Area of Square is: ${sq.area()}`);
console.log(`Area of Reactangle is: ${rect.area()}`);