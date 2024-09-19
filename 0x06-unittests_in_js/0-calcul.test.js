const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when rounding 1.4 and 2.6', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 4 when rounding 1.4 and 2.5', () => {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it('should return 4 when rounding 2.6 and 1.4', () => {
    assert.strictEqual(calculateNumber(2.6, 1.4), 4);
  });

  it('should return 4 when rounding 1.5 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.5, 2.4), 4);
  });

  it('should return 0 when rounding 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return 6 when rounding 2.8 and 2.9', () => {
    assert.strictEqual(calculateNumber(2.8, 2.9), 6);
  });

  it('should return 6 when rounding 2.5 and 2.5', () => {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should return -3 when rounding -1.4 and -1.6', () => {
    assert.strictEqual(calculateNumber(-1.4, -1.6), -3);
  });

  it('should return -3 when rounding -1.5 and -1.6', () => {
    assert.strictEqual(calculateNumber(-1.5, -1.6), -3);
  });

  it('should return -3 when rounding -1.6 and -1.4', () => {
    assert.strictEqual(calculateNumber(-1.6, -1.4), -3);
  });

  it('should return -3 when rounding -1.7 and -1.5', () => {
    assert.strictEqual(calculateNumber(-1.7, -1.5), -3);
  });

  it('should return -4 when rounding -1.6 and -1.7', () => {
    assert.strictEqual(calculateNumber(-1.6, -1.7), -4);
  });

  it('should return -2 when rounding -1.4 and -1.3', () => {
    assert.strictEqual(calculateNumber(-1.4, -1.3), -2);
  });

  it('should return -2 when rounding -1.5 and -1.5', () => {
    assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
  });

  it('should return 0 when rounding 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return 5 when rounding 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 6 when rounding 2 and 3.5', () => {
    assert.strictEqual(calculateNumber(2, 3.5), 6);
  });

  it('should return 10 when rounding 6 and 4.4', () => {
    assert.strictEqual(calculateNumber(6, 4.4), 10);
  });

  it('should return 8 when rounding 4.5 and 3', () => {
    assert.strictEqual(calculateNumber(4.5, 3), 8);
  });

  it('should return 6 when rounding 3.8 and 2', () => {
    assert.strictEqual(calculateNumber(3.8, 2), 6);
  });

  it('should return 7 when rounding 3.2 and 4', () => {
    assert.strictEqual(calculateNumber(3.2, 4), 7);
  });

  it('should return 4 when rounding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 0 when rounding 1 and -1.5', () => {
    assert.strictEqual(calculateNumber(1, -1.5), 0);
  });

  it('should return 1 when rounding 2 and -1.3', () => {
    assert.strictEqual(calculateNumber(2, -1.3), 1);
  });

  it('should return 2 when rounding 4 and -1.7', () => {
    assert.strictEqual(calculateNumber(4, -1.7), 2);
  });

  it('should return 1 when rounding -1.8 and 3', () => {
    assert.strictEqual(calculateNumber(-1.8, 3), 1);
  });

  it('should return 4 when rounding -1.5 and 5', () => {
    assert.strictEqual(calculateNumber(-1.5, 5), 4);
  });

  it('should return 1 when rounding -1.1 and 2', () => {
    assert.strictEqual(calculateNumber(-1.1, 2), 1);
  });
});