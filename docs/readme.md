## Table of Contents

1. [Common Conventions between Front-End and Back-End Teams](#common-conventions-between-front-end-and-back-end-teams)

2. [Writing Comments with JSDoc](#writing-comments-with-jsdoc)

3. [Ordinary Comments](#ordinary-comments)

4. [Git Commit Conventions](#git-commit-conventions)

5. [Branches](#branches)

6. [Pull Requests (PRs)](#pr)

## Common conventions between front-end and back-end teams

| **Category**                                                                                       | Style                                                                                                   | Example                                                       |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Variables & (Functions Methods) names** </br> functions should start with verb then what it does | **Lower <span style="color:green">c</span>amel<span style="color:green">C</span>ase**.                  | `userName`, `getUserData()`                                   |
| **global constant values**                                                                         | <span style="color:green">**CONSTANT_CASE**</span>                                                      | `MAX_USERS`                                                   |
| **Classes, Enums and Types**                                                                       | **Upper <span style="color:green">C</span>amel<span style="color:green">C</span>ase** (**Pascal Case**) | `UserService`, `UserType`, `UserRole`                         |
| **Interfaces should be adjective**                                                                 | **Start with 'I' and use Upper CamelCase**                                                              | `IUserService`, `IUser`                                       |
| **Variable Declarations** Note: use `let` for reassignable variables                               | Prefer `const` over `var`                                                                               | `const userName = 'foo';`                                     |
| **Boolean Variables**                                                                              | **Prefix Boolean variables with `is` for state and `has` for specific value**                           | `isActive`, `isDeleted`, `hasCompany`                         |
| **Indentations**                                                                                   | **Use 2 spaces for indentation**                                                                        |                                                               |
| **Semicolons**                                                                                     | **Always**                                                                                              |                                                               |
| **Quotes**                                                                                         | **Single**                                                                                              |                                                               |
| **Paths**                                                                                          | **Use `@` to start from the `src` folder**                                                              | `import { UserService } from '@/services/user.service';`      |
| **EOF (end of file)**                                                                              | Ensure files end with a newline (`\n`)                                                                  | A blank line at the end of each file                          |
| **Number of lines**                                                                                | Functions should not exceed **30** line.</br> Files should not exceed **300** line.                     |
| **Access Modifiers**                                                                               | All properties and methods must have **`private`**, **`public`**, or **`protected`**                    | `private _users`,                                             |
| **Private Properties & Methods**                                                                   | **Prefix with an underscore `_`**                                                                       | `_userName`, `_fetchData()`                                   |
| **Explicit Types**                                                                                 | **All variables, methods, and properties must have explicit types, even if TypeScript can infer them**  | `const userName: string = 'foo';`, `getUserData(): string {}` |
| **Max Line Length**                                                                                | **80** - **100** characters                                                                             |                                                               |
| **Console Logs**                                                                                   | No console logs left behind in production code                                                          | Remove console.log() before committing code                   |
| **Early Returns**                                                                                  | To avoid deep nesting of conditional statements.                                                        | `if (!user) { return null; }`                                 |
| **Line Break After Function/Class**                                                                | **1** line breaks                                                                                       |                                                               |
| **Boundaries**                                                                                     | **use `min/max`**                                                                                       |                                                               |

## Writing comments with [JSDoc](https://jsdoc.app/)

### Classes

- snippet

  ```tsx
  /**
   * Manages user-related operations.
   */
  class UserService {
    private users: string[] = [];

    /**
     * Initializes the UserService with a list of users.
     * @param {string[]} initialUsers - The initial users for the service.
     */
    constructor(initialUsers: string[]) {
      this.users = initialUsers;
    }

    /**
     * Adds a new user to the list.
     * @param {string} user - The name of the user to add.
     * @returns {void}
     */
    createUser(user: string): void {
      this.users.push(user);
    }
  }
  ```

### Enums

- snippet
  ```tsx
  /**
   * Enum for user roles in the system.
   * @enum {number}
   */
  enum UserRole {
    Admin /**< User with administrative privileges */,
    User /**< Regular user */,
    Guest /**< Guest user with limited access */,
  }
  ```

### Interfaces

- snippet

  ```tsx
  /**
   * Represents a user in the system.
   * @interface
   */
  interface User {
    /**
     * The user's unique ID.
     * @type {number}
     */
    id: number;

    /**
     * The user's full name.
     * @type {string}
     * @default 'foo'
     */
    name: string;
  }
  ```

### Functions

- snippet
  ```tsx
  /**
   * Retrieves user data based on the user ID.
   *
   * @param {number} userId - The ID of the user.
   * @returns {string} - A string containing user data.
   */
  function getUserData(userId: number): string {
    return `User data for ID: ${userId}`;
  }
  ```

## **Ordinary Comments**

These comments are used for implementation-specific notes, such as explaining a complex logic, marking **TODOs**, or clarifying why a certain approach was used.

comment extension: [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

![better-comments](https://github.com/user-attachments/assets/a20d1fc0-f1f4-4ad7-afea-01200d4e7373)

```tsx
// TODO: BLA BLA BLA BLA
function calculateTotal(price: number, discount: number): number {
  // Ensure the discount is never negative or greater than 100
  if (discount < 0 || discount > 100) {
    throw new Error('Discount must be between 0 and 100');
  }

  // Apply the discount to the price
  return price * (1 - discount / 100);
}
```

## Git commit conventions

### [Commits](https://www.conventionalcommits.org/en/v1.0.0/)

```bash
<type>[optional scope]: <description>
# Examples
feat(front): implement dashboard header
feat(back): implement dashboard APIs
fix: fix dashboard data fetching
style: add dashboard styling syntax
```

### Types

- **feat**: A new feature
- **docs**: Documentation only changes
- **fix**: A bug fix
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that (neither fixes a bug nor adds a feature)
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **perf**: A code change that improves performance
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

### Issues

> Examples

```bash
[FIX]: Fix auth flow

[STYLE]: Improve login page styling

[FEATURE]: Implement admin dashboard
```

### Branches

```bash
<type>/<issue-number>/<short-description>
#Example
feature/<issue-number>/implement_dashboard
```

### PR

```bash
<type>/<short-description>
#Example
feature/implement_dashboard
```

### Resources

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [JSDoc](https://jsdoc.app/)
- [JSDoc Cheatsheet](https://devhints.io/jsdoc)
- [JSDoc Types](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
