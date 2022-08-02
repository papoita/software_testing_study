# Testing Library

  *  Kent C. Dodds
https://testing-library.com/blog

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
**get**: if it doesn't find it returns error, therefore is preferred

**find**: is asynchrous. 4000 ms to wait and continuosly check (useful in data fetching)

### data-testid

Works by identifying programatically for testing prposes specifically. This won't change because is fully under our control. Works as an alert for other team members that this is an element being tested.

### fireEvent

fireEvent contains **all** DOM events.
* examples:
  * fireEvent.keypress
  * fireEvent.hover
  * fireEvent.click

# jest-dom
adds on expectations specifically for DOM such as toBeRequired, toHaveClass

## syntax example

```js
test('string', () => {
const {getByTestId} = render(<Game />);
const robotHead = getByTestId('robot-head');

fireEvent.click(robotHead);
expect(robotHead).toHaveClass('alwayswinner');

//because toggle requirement fireEvent click again
fireEvent.click(robotHead);
//.not acts as a negation similar to !
expect(robotHead).not.toHaveClass('alwayswinner');

})

```

# jest.fn()

Do not want to test real live data from an api call. We want to have known values
This works to fake functions




```js
test('', () => {
  const fakeFunction = jest.fn(); //create fake callback

  const result = fakeFunction(); //will be undefined
  expect(fakeFunction().toHaveBeenCalled();
  expect(fakeFunction().toHaveBeenCalledTimes(5);

  //also can be more elaborate
  const moreElaborateFake = hest.fn(() => {
    return 'whatever';

    const resultTwo = moreElaborateFake();
    expect(resultTwo).toBe('whatever');
  })

})

```
##  to fake axios for jest.fn()

Top level in app foldername: __mocks__ and create inside filename axios.js

**fileName.test.js**
```js
test('it can display the result of an api call', () => {
  //render the component
  const {getByTestId, findByText} = render(<Result status = "Waiting" />)

  //find the fetch high scores button
  const highScoreButton = getByTestId('high-scores');

  //click on the fetch high scores btn
  fireEvent.click(highScoreButton);

  //find Alice in the DOM
  //adding the return allows the find to wait until the promise has resolved and not take a previous answer for the test avoiding a false positive
  //{exact:false} allows for a fuzzy search
  return findByTest('Alice', {exact:false});

})

```

**inside fake axios**

```js
const axios = {
  defaults: {},
  get: jest.fn((url) => {
    if( url === '/endpoint'){
      return Promise.resolve({
        status:200,
        data: [
          {
            id: 1,
            name: 'Alice',
            points: 15
          }
          {
            id: 2,
            name: 'Carol',
            points: 5
          }
        ],
      })
    }

  }),

  post: jest.fn(() => {})
};

export default axios;
```

# prettyDOM

