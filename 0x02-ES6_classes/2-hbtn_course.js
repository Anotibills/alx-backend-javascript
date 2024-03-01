export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'name');
    this._length = this.validateNumber(length, 'length');
    this._students = this.validateStudentArray(students, 'students');
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'name');
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'length');
  }

  set students(newStudents) {
    this._students = this.validateStudentArray(newStudents, 'students');
  }

  validateString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${fieldName} must be a String`);
    }
    return value;
  }

  validateNumber(value, fieldName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`${fieldName} must be a valid Number`);
    }
    return value;
  }

  validateStudentArray(value, fieldName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${fieldName} must be an Array`);
    }
    for (const student of value) {
      if (typeof student !== 'string') {
        throw new TypeError(`Elements of ${fieldName} must be strings`);
      }
    }
    return value;
  }
}
