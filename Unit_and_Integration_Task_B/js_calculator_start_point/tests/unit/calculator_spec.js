var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // multiply 3x5 and get 15
  it('it can multiply', function() {
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(calculator.runningTotal, 15)
  })

  // divide 21/7 and get 3
  it('it can divide', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  // add 1+4 and get 5
  it('it can add', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  })

  // subtract 7-4 and get 3
  it('it can subtract', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  // concatenate multiple number button clicks
  it('it can click mutiple buttons', function() {
    calculator.numberClick(6);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 65);
  })

  // chain multiple operations together
  it('it can do multiple operations', function() {
    calculator.previousTotal = 0;
    calculator.numberClick(7);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 11);
  })

  // clear the running total without affecting the calculation
  it('it can clear running total without affecting calculation', function() {
    calculator.previousTotal = 0;
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    calculator.operatorClick('*')
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 27);
  })


});
