const assert = require("assert").strict;
//console.log(assert);

const sayHello = (naming) => {
  //console.log(`hello there ${naming}`)
  return `hello there ${naming}`;
};

//sayHello("Alice");

const actual = sayHello("Alice");

assert.strictEqual(actual, "hello there Bob")