const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should fizz, buzz, fizz-buzz, or the original number', function() {

    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'},
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });


  it('should raise error if args not numbers', function() {
      
    const badInputs = [
      'ham',
      '15',
      true
    ];
 
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});