const numVowels = require("../num-vowels");
const assert = require("assert");

describe("tests for the numVowels function", () => {
  it('returns 3 when given the string "orange"', () => {
    const actual = numVowels("orange");
    const expected = 3;
    assert.strictEqual(actual, expected);

    //assert.strictEqual(numVowels('orange), 3);
  });

  it('returns x given the string "riding a bike in summer', () => {
    const actual = numVowels("riding a bike in summer");
    const expected = 8;

    assert.strictEqual(actual, expected);
  });

  it('returns x given a string "love test driven development', () => {
    const actual = numVowels("love test driven development");
    const expected = 9;

    assert.strictEqual(actual, expected);
  });
});
