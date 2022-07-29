const sayHello = (naming) => {
  //console.log(`hello there ${naming}`)
  return `hello there ${naming}`;
};

// This will export an object with a function sayHello with a new key value pair { sayHello: [Function: sayHello] }
//module.exports.sayHello = sayHello;

//this will rewrite module.export to the function [Function: sayHello]

const MEANING_OF_LIFE = 42;

const addTwo = (num) => {
  return num + 2;
};

module.exports = {
  sayHello: sayHello,
  addTwo: addTwo,
  MEANING_OF_LIFE: MEANING_OF_LIFE
}
