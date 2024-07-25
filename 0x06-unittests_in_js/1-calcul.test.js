// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should round both numbers and return their sum', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6); // 1 + 5 = 6
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6); // 2 + 4 = 6
      assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6); // 3 + 3 = 6
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.4), 5); // 3 + 2 = 5
    });
  });

  describe('SUBTRACT', function() {
    it('should round both numbers and return their difference', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4); // 1 - 5 = -4
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2); // 2 - 4 = -2
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0); // 3 - 3 = 0
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 2.4), 1); // 3 - 2 = 1
    });
  });

  describe('DIVIDE', function() {
    it('should round both numbers and return their quotient', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2); // 1 / 5 = 0.2
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5); // 2 / 4 = 0.5
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2.5), 1); // 3 / 3 = 1
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 2.4), 1.5); // 3 / 2 = 1.5
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error'); // 1 / 0 = Error
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.4), 'Error'); // 2 / 0 = Error
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for an invalid operation type', function() {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
    });
  });
});
