# Jest
Unit testing framework

dependency of react scripts in package.json 
Ships when `npx-create-react-app` with expectations from setup such as toBe, toMatch. Creators are the same: fb

https://jestjs.io/docs/expect

Useful for testing REACT

- test() is replaceable with it()
- expect

It leaves test watchers so when a file affected by a test is changed it will automatically run the tests. You can leave a CLI tab open for it.

## Structure

- describe: wrapping a function
- setup fake state variable for tests to not interfere with each other

```js
beforeEach(() => {
  //baseline
})
```
- string and callback

```js
test(('if game is false return a valid selection', () => {
  const game = false;
  const playerSelection = 'Result1';

  const actual = functionName(arg1, arg2);
  const items = ['Result1', 'Result2', 'Result3']

//expect(items.includes((actual)).toBe('true')
expect(items).toContain(actual);
});
```




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