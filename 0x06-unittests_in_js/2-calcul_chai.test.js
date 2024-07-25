// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should round both numbers and return their sum', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6); // 1 + 5 = 6
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6); // 2 + 4 = 6
      expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6); // 3 + 3 = 6
      expect(calculateNumber('SUM', 2.6, 2.4)).to.equal(5); // 3 + 2 = 5
    });
  });

  describe('SUBTRACT', function() {
    it('should round both numbers and return their difference', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4); // 1 - 5 = -4
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2); // 2 - 4 = -2
      expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0); // 3 - 3 = 0
      expect(calculateNumber('SUBTRACT', 2.6, 2.4)).to.equal(1); // 3 - 2 = 1
    });
  });

  describe('DIVIDE', function() {
    it('should round both numbers and return their quotient', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2); // 1 / 5 = 0.2
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5); // 2 / 4 = 0.5
      expect(calculateNumber('DIVIDE', 2.5, 2.5)).to.equal(1); // 3 / 3 = 1
      expect(calculateNumber('DIVIDE', 2.6, 2.4)).to.equal(1.5); // 3 / 2 = 1.5
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error'); // 1 / 0 = Error
      expect(calculateNumber('DIVIDE', 1.5, 0.4)).to.equal('Error'); // 2 / 0 = Error
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for an invalid operation type', function() {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid operation type');
    });
  });
});
