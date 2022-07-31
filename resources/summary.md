# Resources Summary

Research done on the subject that is the focus of the possition. 

Quality code, testing, design principles.

## Software Testing, Second Edition. Ron Patton

https://learning.oreilly.com/library/view/software-testing-second/0672327988/pr05.html#fm01lev2sec1

A great deal of science and engineering is behind it, lots of discipline and planning

4 basic areas: 
1. Examining the specification: how to find bugs by inspecting documentation that describes what the software is intended to do.
2. testing the software with blinders on: no access to the code and not knowing how to program
3. examining the code: how to perform detailed analysis of the programs source code to find bugs.
4. 


## More Agile Testing: Learning Journeys for the Whole Team. Janet Gregory
https://learning.oreilly.com/library/view/more-agile-testing/9780133749571/ch03.html#:-:text=The%20more%20effort%20I,product%20at%20the%20end.

* The more effort I put into testing the product conceptually at the start of the process, the less effort I had to put into manually testing the product at the end.

unit tests vs browser level tests

### T-Shaped Skill Set
In Agile Testing, we described ten principles for agile testers, which emphasized attitude and mindset over specific technical skills. As a quick review, they are:

- Provide continuous feedback.

- Deliver value to the customer.

- Enable face-to-face communication.

- Have courage.

- Keep it simple.

- Practice continuous improvement.

- Respond to change.

- Self-organize.

- Focus on people.

- Enjoy.

Our answer is that testers need T-shaped skills a term first defined by David Guest (Guest, 1991). To work effectively on any given team, we need both broad and deep skill sets. Broad knowledge in areas other than our own specialty enables us to collaborate across disciplines with experts in other roles. Deep knowledge and extensive practice in a single field ensure that we bring something essential to the team

basic understanding of:
- their system’s architecture, 
- knowledge of general programming concepts and 
- design principles, 
- ability to do basic database queries, and 
- competence with such tools as integrated development environments (IDEs) and 
- continuous integration (CI) dashboards.

* How to Become a Generalizing Specialist *

Meta knowledge or looking for heuristics
examples for a tester generalizing toward programming => rules of clean code (Martin, 2009), 
- the principle of DRY (don’t repeat yourself), 
- length or counts of classes, variables, function arguments, or too many if-statements in a method. 
 The value-add is helping the specialist with signal detection, not problem correction.

## Clean Code. Robert Martin (favorite so far)
https://github.com/jnguyen095/clean-code/blob/master/Clean.Code.A.Handbook.of.Agile.Software.Craftsmanship.pdf

code represents the details of requirements

messy code, fast code will not be fixed later...
Le Blanc's law: later equals never
productivity decreases, redesign necessary therefore clean code is not only cost effective but a matter of professional survival.

clean code should read like well written prose

written by someone who cares deeply about the craft

keeping it clean OVER TIME, continuos improvement

Use meaningful names, in variables, funcctions, classes: it should answer all the big questions.Why it exists, what it does, how it is used.

## Practical TDD linkedin course

https://www.linkedin.com/learning/practical-test-driven-development-for-java-programmers/what-is-test-driven-development?autoSkip=true&autoplay=true&resume=false

Test driven development TDD statred in 2003
part of agile programming
consistently and thoroughly for clean code that works
extreme programing complies with agile manifesto


### Tests drive the code

iterative process

Red: a new test will initially fail
Green: work to get the test to pass
Refactor: optimise test and code

check single identifiable piece of logic/beahviour in a single scenario= unit of functionality in isolation

vs integration test 
vs end to end

## Node.js testing and code quality

https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/what-you-should-know?autoSkip=true&autoplay=true&resume=false

ES6
existing node.js app
form to request a restaurant reservation
stores reservation booking requests
admin view of submitted reservations

express.js
SQlite knex

- code is comunication
  computers interpret and execute code
  instructions and rules
- people read and write code
  describes intent

- comunicate intent and everyome has to understand each other

human error and adapt in response

### what is code quality
Joseph M Juran's quality control handbook defines quality: 
1. quality consists of those product features that meet the needs of customers and thereby provide product satisfaction
2. Quality consists of freedom from deficiencies


ie.email storage functionality
store email address- can't store, store non-email

#### quality code: 
1. useful: flexible and reusable
2. maintain: can you mantain the code, can someone else mantain the code, can someone else read and understand the design and intent?

## JavaScript Testing Practices and Principles

https://frontendmasters.com/courses/testing-practices-principles/introduction/

https://github.com/FrontendMasters/testing-workshop

## Scheduler project

https://github.com/papoita/scheduler

## C# and .NET core test-Driven Development

https://learning.oreilly.com/library/view/c-and-net/9781788292481/

