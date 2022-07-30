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

- To see the node wrapper functions arguments: exports, require, module, __filename, __dirname. When cloning project use  __dirname.
  console.log(arguments)

  # Test runner

  npmjs.com 
  npm means nothing

  ## mocha

  simple flexible fun JS framework for node.js

  mochajs/mocha in GitHub
  
### setup mocha
  1. to use download to root package.json.
    npm init -y
    
  2. Or populate manually 
    npm init 
  server.js (would be the entry point
  licence ISIC

  3. go to the docs in npm

  4. install either globally or as a dependency

    - `npm install <package> `
    -  `npm install --global <package>`
    - `npm install --save-dev <package>`

  5. `mkdir test`

  6. create file for testing samename as file <filename.test.js>

  7. write it() that has a string a cb function
  ```js
   it("", () => {});
   ```

  8. execute the file (mocha binary)
  `./node_modules/mocha/bin/mocha`

  in case it doesn't work type this BUT if mocha not install it will automaticall fetch new vrsion if mocha is not installed.

  `npx mocha`

  