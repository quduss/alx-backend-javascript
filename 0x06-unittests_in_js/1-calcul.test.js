const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 3.7, 1.3), 5);
      assert.strictEqual(calculateNumber('SUM', 4.5, 3.1), 8);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.3), 4);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.8, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
      assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5);
      assert.strictEqual(calculateNumber('SUM', -3.8, -3.5), -7);
      assert.strictEqual(calculateNumber('SUM', -1.8, -2.2), -4);
      assert.strictEqual(calculateNumber('SUM', -1.2, -2.2), -3);
      assert.strictEqual(calculateNumber('SUM', -1.5, -2.5), -3);
      assert.strictEqual(calculateNumber('SUM', -1.8, -2.6), -5);
      assert.strictEqual(calculateNumber('SUM', 3, 2.5), 6);
      assert.strictEqual(calculateNumber('SUM', 3, 2.7), 6);
      assert.strictEqual(calculateNumber('SUM', 3, 2.4), 5);
      assert.strictEqual(calculateNumber('SUM', 3.7, 5), 9);
      assert.strictEqual(calculateNumber('SUM', 3.5, 5), 9);
      assert.strictEqual(calculateNumber('SUM', 3.2, 4), 7);
      assert.strictEqual(calculateNumber('SUM', -4.7, 3), -2);
      assert.strictEqual(calculateNumber('SUM', -4.5, 3), -1);
      assert.strictEqual(calculateNumber('SUM', -4.2, 3), -1);
      assert.strictEqual(calculateNumber('SUM', 7, -3.3), 4);
      assert.strictEqual(calculateNumber('SUM', 7, -3.5), 4);
      assert.strictEqual(calculateNumber('SUM', 7, -3.6), 3);
      assert.strictEqual(calculateNumber('SUM', 3, 2), 5);
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.3), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 3.1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.8, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.7), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', -3.8, -3.5), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.8, -2.2), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -2.2), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.5), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.8, -2.6), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 2.5), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 2.7), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 2.4), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 5), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 5), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 4), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', -4.7, 3), -8);
      assert.strictEqual(calculateNumber('SUBTRACT', -4.5, 3), -7);
      assert.strictEqual(calculateNumber('SUBTRACT', -4.2, 3), -7);
      assert.strictEqual(calculateNumber('SUBTRACT', 7, -3.3), 10);
      assert.strictEqual(calculateNumber('SUBTRACT', 7, -3.5), 10);
      assert.strictEqual(calculateNumber('SUBTRACT', 7, -3.6), 11);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 2), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.3), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 3.1), 1.6666666666666667);
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.3), 0.3333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.5), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 1.8, 3.7), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', -1.2, -3.7), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, -3.7), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', -3.8, -3.5), 1.3333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', -1.8, -2.2), 1);
      assert.strictEqual(calculateNumber('DIVIDE', -1.2, -2.2), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, -2.5), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', -1.8, -2.6), 0.6666666666666666);
      assert.strictEqual(calculateNumber('DIVIDE', 3, 2.5), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 3, 2.7), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 3, 2.4), 1.5);
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 5), 0.8);
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 5), 0.8);
      assert.strictEqual(calculateNumber('DIVIDE', 3.2, 4), 0.75);
      assert.strictEqual(calculateNumber('DIVIDE', -4.7, 3), -1.6666666666666667);
      assert.strictEqual(calculateNumber('DIVIDE', -4.5, 3), -1.3333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', -4.2, 3), -1.3333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', 7, -3.3), -2.3333333333333335);
      assert.strictEqual(calculateNumber('DIVIDE', 7, -3.5), -2.3333333333333335);
      assert.strictEqual(calculateNumber('DIVIDE', 7, -3.6), -1.75);
      assert.strictEqual(calculateNumber('DIVIDE', 3, 2), 1.5);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, -0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.9, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.9, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.9, -0.5), 'Error');
    });
  });
});
