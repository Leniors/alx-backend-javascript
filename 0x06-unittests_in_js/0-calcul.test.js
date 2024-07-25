// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round both numbers and return their sum', function() {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6); // 1 + 5 = 6
    assert.strictEqual(calculateNumber(1.5, 3.7), 6); // 2 + 4 = 6
    assert.strictEqual(calculateNumber(2.5, 2.5), 6); // 3 + 3 = 6
    assert.strictEqual(calculateNumber(2.6, 2.4), 5); // 3 + 2 = 5
  });

  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.4, -4.5), -5); // -1 + -4 = -6
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5); // -1 + -4 = -5
    assert.strictEqual(calculateNumber(-2.5, -2.5), -4); // -2 + -2 = -5
    assert.strictEqual(calculateNumber(-2.6, -2.4), -5); // -3 + -2 = -5
  });

  it('should handle one negative and one positive number correctly', function() {
    assert.strictEqual(calculateNumber(-1.4, 4.5), 4); // -1 + 5 = 4
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3); // -2 + 4 = 3
    assert.strictEqual(calculateNumber(-2.5, 2.5), 1); // -2 + 3 = 1
    assert.strictEqual(calculateNumber(-2.6, 2.4), -1); // -3 + 2 = -1
  });
});
