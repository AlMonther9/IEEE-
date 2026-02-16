# Testing Documentation

This document provides a detailed overview of the testing setup and conventions for our project. We use a combination of **Jest**, **React Testing Library (RTL)**, and **Cypress** for comprehensive testing, covering unit tests, integration tests, and end-to-end (E2E) tests.

## Table of Contents
- [Testing Tools Overview](#testing-tools-overview)
- [Testing Setup](#testing-setup)
  - [Jest](#jest)
  - [React Testing Library (RTL)](#react-testing-library-rtl)
  - [Cypress (E2E Testing)](#cypress-e2e-testing)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
  - [Unit Tests](#unit-tests)
  - [Integration Tests](#integration-tests)
  - [E2E Tests](#e2e-tests)
- [Testing Best Practices](#testing-best-practices)
- [Coverage](#coverage)
- [CI/CD Integration](#ci-cd-integration)

## Testing Tools Overview

1. **Jest**: Our primary test runner, which supports running unit and integration tests with extensive features for mocking, assertions, and snapshots.
2. **React Testing Library (RTL)**: Used for testing React components in a way that closely resembles how users interact with the application.
3. **Cypress**: Handles end-to-end testing, ensuring that the application works as expected from the user’s perspective, by simulating browser interactions.

## Testing Setup

### Jest
- We use Jest for unit and integration testing. It is configured to support **TypeScript**, **Next.js**, and our project-specific needs.
- Config file: `jest.config.ts`

**Key Configurations**:
```ts
import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  coverageProvider: 'babel',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
```

### React Testing Library (RTL)
- RTL is used to render components and simulate user interactions.
- It comes with jest-dom matchers that extend Jest to make assertions on DOM nodes easier.

Example:
```tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
```

### Cypress (E2E Testing)
- We use Cypress for E2E testing. It runs in a real browser to ensure the entire application behaves as expected.
- Tests are placed in the `cypress` folder. The configuration is set in `cypress.config.ts`.

To start Cypress for E2E testing:
```bash
npm run cypress:open
```

## Running Tests

To run tests locally, we have the following npm scripts configured:

- **Run all unit and integration tests**:
  ```bash
  npm test
  ```

- **Run tests with coverage**:
  ```bash
  npm run test:coverage
  ```

- **Run Cypress E2E tests**:
  ```bash
  npm run cypress
  ```

## Writing Tests

### Unit Tests
Unit tests focus on testing individual components and their logic.

**Example**:
```tsx
import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';

test('renders the button with correct text', () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});
```

### Integration Tests
Integration tests ensure that components work together correctly.

**Example**:
```tsx
import { render, screen } from '@testing-library/react';
import Form from '@/components/Form';

test('submits the form correctly', () => {
  render(<Form />);
  const input = screen.getByLabelText('Name');
  const submitButton = screen.getByRole('button', { name: /submit/i });
  
  // Simulate user interactions
  fireEvent.change(input, { target: { value: 'John Doe' } });
  fireEvent.click(submitButton);

  expect(screen.getByText('Form submitted')).toBeInTheDocument();
});
```

### E2E Tests
End-to-end tests simulate real user behavior, checking if the application flows as intended.

**Example** (Cypress):
```js
describe('User Login', () => {
  it('should allow a user to log in', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/dashboard');
  });
});
```

## Testing Best Practices

- **Test behavior, not implementation**: Focus on what the user sees or interacts with.
- **Keep tests small and focused**: Each test should verify one thing.
- **Use descriptive test names**: Test descriptions should clearly state what is being tested.
- **Mock dependencies sparingly**: Only mock what’s necessary to avoid overly complex tests.

## Coverage

We aim to maintain high code coverage for critical components. You can check the current coverage report by running:

```bash
npm run test:coverage
```

The coverage report will be generated in the `coverage/` folder, showing which parts of the codebase are covered by tests.

## CI/CD Integration

Tests are automatically run during the CI/CD pipeline to ensure code quality before deployment. If any tests fail, the pipeline will stop, ensuring that no breaking changes reach production.

---

This README section serves as a guide to ensure that testing remains a core part of our development process. Make sure to follow the outlined conventions when writing tests to maintain consistency across the team.