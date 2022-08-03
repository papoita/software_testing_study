# Cypress

- Browser-based testing
- visit the app and use it like a user (user stories)
- done at the end
- expensive (time-wise)


 great documentation! why they approach testing, videos
 it can act as a user, select, click, take screenshots for documentation
 use dif viewports

 ## installation

 ```npm install cypress --save-dev```

 Project has to be running

## structure and syntax

Works like Mocha but bundles with Chai, Sinon, jQuery. (assertions ready to use). Chainable getters : closer to english sentences

- cy.stub: completely replace the process

- cy.spy: check if something got called. (eg axios requests)

