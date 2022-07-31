  # Test runner mocha
Mocha JS test framework running on Node.js and in the browser
  
 https://mochajs.org/
  mochajs/mocha in GitHub


  npmjs.com 
  npm stands for nothing


## setup mocha
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

  9. 
 you can run mocha and see the console.log there