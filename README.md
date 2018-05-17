# End To End Testing

### Summary

End to end testing is the holy grail in automated testing. It is the final and most difficult to automate step of the ["Three Pillars of Automated Testing"](https://emanuilslavov.com/the-three-pillars-of-automated-testing/).

## Static Code Analysis
The first pillar, "Static Code Analysis" is the easiest. Generally, this means using a linter or some other tool to enforce a similar coding style in a team to avoid confusion and maintain a consistent codebase.

Ruby uses Rubocop and Javascript uses ES Lint. These tools can also check if you have undeclared or unused variables and other errors that can help improve performance.

The idea of this principle is enforced for the benefit of the other developers on a team, so you don't kill each other about using tabs or spaces, etc.

## Unit Tests
The majority of written tests are unit tests, which typically test a section of code in an isolated environment. Models, controllers and views are typically all tested individually.

These tests are easy to write and are beneficial to make sure that different parts of your code continue to interact in the expected manner.

However, unit tests can often be abstracted from the user experience, and 100% code coverage with unit tests doesn't mean you won't run into errors, such as when the user does something like entering letters into a number field.

## Blackbox (End to End) Tests
End to end testing is done in an environment that should be identical to production, but in its own environment. This means a staging server with a real database (with seeded data) and on a live site.

This form of testing is the most difficult to set up and maintain, but it can be a huge benefit to your testing if you can set it up.

## Getting Started
Enough theory, here's how to get started with this repo.

```shell
$ git clone
$ npm install
$ npm cypress
```

This will install the end-to-end testing framework [Cypress](https://www.cypress.io/), which is incredibly powerful, although the [API](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) can take some time to get familiar with.


