export default class Currency {
  constructor(code, name) {
    // Verify types of the constructor arguments
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // Asign values to private attributes
    this._code = code;
    this._name = name;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Method to return the attributes
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
