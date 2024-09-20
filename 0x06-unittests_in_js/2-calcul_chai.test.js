const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return sum of rounded numbers', () => {
      chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      chai.expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      chai.expect(calculateNumber('SUM', 3.7, 1.3)).to.equal(5);
      chai.expect(calculateNumber('SUM', 4.5, 3.1)).to.equal(8);
      chai.expect(calculateNumber('SUM', 1.2, 3.3)).to.equal(4);
      chai.expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
      chai.expect(calculateNumber('SUM', 1.8, 3.7)).to.equal(6);
      chai.expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
      chai.expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
      chai.expect(calculateNumber('SUM', -3.8, -3.5)).to.equal(-7);
      chai.expect(calculateNumber('SUM', -1.8, -2.2)).to.equal(-4);
      chai.expect(calculateNumber('SUM', -1.2, -2.2)).to.equal(-3);
      chai.expect(calculateNumber('SUM', -1.5, -2.5)).to.equal(-3);
      chai.expect(calculateNumber('SUM', -1.8, -2.6)).to.equal(-5);
      chai.expect(calculateNumber('SUM', 3, 2.5)).to.equal(6);
      chai.expect(calculateNumber('SUM', 3, 2.7)).to.equal(6);
      chai.expect(calculateNumber('SUM', 3, 2.4)).to.equal(5);
      chai.expect(calculateNumber('SUM', 3.5, 5)).to.equal(9);
      chai.expect(calculateNumber('SUM', 3.2, 4)).to.equal(7);
      chai.expect(calculateNumber('SUM', -4.7, 3)).to.equal(-2);
      chai.expect(calculateNumber('SUM', -4.5, 3)).to.equal(-1);
      chai.expect(calculateNumber('SUM', -4.2, 3)).to.equal(-1);
      chai.expect(calculateNumber('SUM', 7, -3.3)).to.equal(4);
      chai.expect(calculateNumber('SUM', 7, -3.5)).to.equal(4);
      chai.expect(calculateNumber('SUM', 7, -3.6)).to.equal(3);
      chai.expect(calculateNumber('SUM', 3, 2)).to.equal(5);
      chai.expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return difference of rounded numbers', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      chai.expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      chai.expect(calculateNumber('SUBTRACT', 3.7, 1.3)).to.equal(3);
      chai.expect(calculateNumber('SUBTRACT', 4.5, 3.1)).to.equal(2);
      chai.expect(calculateNumber('SUBTRACT', 1.2, 3.3)).to.equal(-2);
      chai.expect(calculateNumber('SUBTRACT', 1.5, 3.5)).to.equal(-2);
      chai.expect(calculateNumber('SUBTRACT', 1.8, 3.7)).to.equal(-2);
      chai.expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
      chai.expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(3);
      chai.expect(calculateNumber('SUBTRACT', -3.8, -3.5)).to.equal(-1);
      chai.expect(calculateNumber('SUBTRACT', -1.8, -2.2)).to.equal(0);
      chai.expect(calculateNumber('SUBTRACT', -1.2, -2.2)).to.equal(1);
      chai.expect(calculateNumber('SUBTRACT', -1.5, -2.5)).to.equal(1);
      chai.expect(calculateNumber('SUBTRACT', -1.8, -2.6)).to.equal(1);
      chai.expect(calculateNumber('SUBTRACT', 3, 2.5)).to.equal(0);
      chai.expect(calculateNumber('SUBTRACT', 3, 2.7)).to.equal(0);
      chai.expect(calculateNumber('SUBTRACT', 3, 2.4)).to.equal(1);
      chai.expect(calculateNumber('SUBTRACT', 3.7, 5)).to.equal(-1);
      chai.expect(calculateNumber('SUBTRACT', 3.5, 5)).to.equal(-1);
      chai.expect(calculateNumber('SUBTRACT', 3.2, 4)).to.equal(-1);
      chai.expect(calculateNumber('SUBTRACT', -4.7, 3)).to.equal(-8);
      chai.expect(calculateNumber('SUBTRACT', -4.5, 3)).to.equal(-7);
      chai.expect(calculateNumber('SUBTRACT', -4.2, 3)).to.equal(-7);
      chai.expect(calculateNumber('SUBTRACT', 7, -3.3)).to.equal(10);
      chai.expect(calculateNumber('SUBTRACT', 7, -3.5)).to.equal(10);
      chai.expect(calculateNumber('SUBTRACT', 7, -3.6)).to.equal(11);
      chai.expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
      chai.expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return division of rounded numbers', () => {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      chai.expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
      chai.expect(calculateNumber('DIVIDE', 3.7, 1.3)).to.equal(4);
      chai.expect(calculateNumber('DIVIDE', 4.5, 3.1)).to.equal(1.6666666666666667);
      chai.expect(calculateNumber('DIVIDE', 1.2, 3.3)).to.equal(0.3333333333333333);
      chai.expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.equal(0.5);
      chai.expect(calculateNumber('DIVIDE', 1.8, 3.7)).to.equal(0.5);
      chai.expect(calculateNumber('DIVIDE', -1.2, -3.7)).to.equal(0.25);
      chai.expect(calculateNumber('DIVIDE', -1.5, -3.7)).to.equal(0.25);
      chai.expect(calculateNumber('DIVIDE', -3.8, -3.5)).to.equal(1.3333333333333333);
      chai.expect(calculateNumber('DIVIDE', -1.8, -2.2)).to.equal(1);
      chai.expect(calculateNumber('DIVIDE', -1.2, -2.2)).to.equal(0.5);
      chai.expect(calculateNumber('DIVIDE', -1.5, -2.5)).to.equal(0.5);
      chai.expect(calculateNumber('DIVIDE', -1.8, -2.6)).to.equal(0.6666666666666666);
      chai.expect(calculateNumber('DIVIDE', 3, 2.5)).to.equal(1);
      chai.expect(calculateNumber('DIVIDE', 3, 2.7)).to.equal(1);
      chai.expect(calculateNumber('DIVIDE', 3, 2.4)).to.equal(1.5);
      chai.expect(calculateNumber('DIVIDE', 3.7, 5)).to.equal(0.8);
      chai.expect(calculateNumber('DIVIDE', 3.5, 5)).to.equal(0.8);
      chai.expect(calculateNumber('DIVIDE', 3.2, 4)).to.equal(0.75);
      chai.expect(calculateNumber('DIVIDE', -4.7, 3)).to.equal(-1.6666666666666667);
      chai.expect(calculateNumber('DIVIDE', -4.5, 3)).to.equal(-1.3333333333333333);
      chai.expect(calculateNumber('DIVIDE', -4.2, 3)).to.equal(-1.3333333333333333);
      chai.expect(calculateNumber('DIVIDE', 7, -3.3)).to.equal(-2.3333333333333335);
      chai.expect(calculateNumber('DIVIDE', 7, -3.5)).to.equal(-2.3333333333333335);
      chai.expect(calculateNumber('DIVIDE', 7, -3.6)).to.equal(-1.75);
      chai.expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });

    it('should return "Error" when dividing by 0', () => {
      chai.expect(calculateNumber('DIVIDE', 4.4, -0)).to.equal('Error');
      chai.expect(calculateNumber('DIVIDE', 1.9, -0.2)).to.equal('Error');
      chai.expect(calculateNumber('DIVIDE', 4.4, 0)).to.equal('Error');
      chai.expect(calculateNumber('DIVIDE', 1.9, 0.2)).to.equal('Error');
      chai.expect(calculateNumber('DIVIDE', 1.9, -0.5)).to.equal('Error');
    });
  });
});
