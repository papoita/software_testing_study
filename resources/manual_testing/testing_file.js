// console.log(arguments);

const sayHello = require("./manual_testing");

//console.log(sayHello);

const assert = require("assert").strict;

 const actual = sayHello("Alice");

 assert.strictEqual(actual, "hello there Alice")
