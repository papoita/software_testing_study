const sayHello = require('../manual_testing/manual_testing');
const assert = require('assert');

describe('I group tests together, use a file ej. SayHello', () => {

  it('describes the things we want to test', () => {
    // testing logic here
    //throw new Error("oops something went wrong")
    });
    
    it('returns "hello there Alice" when given the string "Alice"', () => {
      const actual = sayHello('Alice');
      const expected = 'hello there Alice';
    
      assert.strictEqual(actual, "helloooo");
    })
})

