# About

This repo works as a compilation of resources, notes and technical information useful to prepare for a technical interview related specifically to code testing, quality assurance and design principles.


## Objective

- Preparation for TDD testing with Mocha, Chai, Jest, integration tests and end to end testing with Cypress. Tech stack: JavaScript, Node.js, postgreSQL.

# Types of Testing

**Unit Testing**: smallest pieces of code (known arguments and get known results). Write assertions about it

**Integration**:
test bigger pieces of code when they have to work together. (meme of kitchen drawers)

**end-to-end**: testing the app like the user using the browser by doing it programatically

**storybook**: visual testing, showing component rendering

**static testing**: VScode linter, underline as typing

## Other types of testing
* User acceptance testing

* a/b testing

* Regression testing: testing bugs by causing it (the bug) to occur


# Fearless refactor

 Thanks to the test suite: you can refactor, modify, optimize and always make sure that code is working the way it should.

 Make sure that you have several tests for redundancy and edge cases.
 Always evaluate: What if we pass in an array of objects, too many things, too few things?

Testing gives the developer a LOT of power: when creating the test before the function exists allowing for:
- define name of function, 
- what arguments and type it takes,
- what files it lives in,
- what and types of return values.

# Tools for testing

## Unit Testing
* [Mocha](resources/mocha_info.md) 
  * [Mocha_Demo](resources/mocha_demo/)
* [Chai](resources/chai_info.md)
* [Jest](resources/jest_info.md) 

## Integration Testing

* [Testing Library](resources/testing_library.md)


# Resources folder 
Has a [summary file](resources/summary.md) from a variety of recognized sources on the subject. 

* links to books,
* lectures and 
* repo's 


### Good to have

- Understand Techstack: EmberJS, Python(Flask), MySQL.

- Revision of testing concepts in proposed project. Tech stack:  .NET and C#.

