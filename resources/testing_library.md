# Testing Library

Is based in searching for things in the DOM
ie. ByTestId

simulate firing events

Supports REACT framework alreayd in installation
https://testing-library.com/docs/react-testing-library/intro

@testing-library-react in package.json

## in the fileName.test.js
```js

//import component and methods from the testing library
import Component from  './Component';
import {render, getTestById} from @testing-library-react;

//describe test with fake data then in cb render in jsx the object in the dom and write the expect test
test('', () => {
  const fakeData = {
    key1: 1,
    key2: 2,
    key3: 3,
  };
  const {container} = render(<Result status={fakeData.key1} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for choice');
});
```

## Methods

### Examples
1. queryAllByLabelText: gives back collection of elements
2. queryByLabelText: gives back one the first singular item

3. getAllByLabelText
4. getByLabelText

5. findAllByLabelText
6. findByLabelText

### query and get
 operate synchronously- immediately look at DOM

**query** 
: if it doesn't find it returns Null (programatically check)
**get**: if it doesn't find it returns error

**find**: is asynchrous. 4000 ms to wait and continuosly check (useful in data fetching)