# Jest
Unit testing framework

dependency of react scripts in package.json 
Ships when `npx-create-react-app` with expectations from setup such as toBe, toMatch. Creators are the same: fb

https://jestjs.io/docs/expect

Useful for testing REACT

- test() is replaceable with it()
- expect


## Setup
* CLI
`npm install --save-dev jest`

* Syntax 
```js
const sum = require('./sum');

test('adds 1+ 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
})

```

## Run

`npm test -- --verbose`

__tests__

filename.test.js