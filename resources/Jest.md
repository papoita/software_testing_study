# Jest
Unit testing framework
Ships with expectations from setup such as toBe, toMatch. Creators are the same: fb

https://jestjs.io/docs/expect

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