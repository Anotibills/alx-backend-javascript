// Import the Car class from another module
import Car from './10-car';

// Create a subclass EVCar that extends the Car class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the constructor of the parent class Car
    super(brand, motor, color);
    // Add a private property _range specific to EVCar
    this._range = range;
  }
  
  // Define a method to clone a car object
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
