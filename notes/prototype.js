/**A function prototype lets you easily define and add properties or methods to an object. 
Prototypes exist for all objects that can be created with the keyword”new”. 
All object constructors create objects that inherit properties and methods that are defined by the prototype. 
At instantiation objects inherit the current state of the prototype. Note however, that scripts can override prototype properties and functions. F
ollowing is an example of using a prototype to add a method to the Car class: */

function Car(make, model, year) {
 this.make = make;
 this.model = model;
 this.year = year;
}
Car.prototype.getName = function() {
 return this.make  + this.model + this.year;
}