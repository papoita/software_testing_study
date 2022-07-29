# Manual Testing

- run a function and console.log  but that is very expensive -pay a developer to run the code, grab the console 

- instead do a return and store it in a variable

- console.assert()
 takes a condition that evaluates to a boolean value and a statement to run only if the value is FALSE.

- use node (after 2009). Js was not meant to be on the backend -webserver . JS was designed and built to live in the web browser. 
V8 engine (js interpreter) wrap it in C++ and call it node. Interact with the file system, create TCP or HTTP server. Different modules and packages in node that can be added to code. only in node.org website not in MDN.

- assert can be a function and an object. All functions are objs in JS.

- assert.equal(actual, expected [, message])

  - const assert = require("assert).strict;
  - strict refers to the  === which evaluates both type and value

- Have different files for production code vs testing code.

- module.exports, object that allows to export anything from a file. Function, objects, primitives, arrays. Always starts as an empty {}.

- See the function convert it into string and log it. 

  console.log(sayHello.toString());