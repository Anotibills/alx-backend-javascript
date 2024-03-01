// Define a class Airport
export default class Airport {
  constructor(name, code) {
    // Store the provided name and code as private properties
    this._name = name;
    this._code = code;
  }

  // Create a method to represent the Airport object as a string
  toString() {
    // Return a string representation of the airport using its code
    return `[Airport Object - Code: ${this._code}]`;
  }
}
