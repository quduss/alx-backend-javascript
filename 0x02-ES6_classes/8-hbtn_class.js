export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter for size
  get size() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  // Getter for location
  get location() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }

  set size(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._size = value;
  }

  set location(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._location = value;
  }

  // When cast to a Number, return the size
  valueOf() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  // When cast to a String, return the location
  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }
}
