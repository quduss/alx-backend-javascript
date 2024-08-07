import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set floors(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._floors = value;
  }

  get floors() {
    // eslint-disable-next-line no-underscore-dangle
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
