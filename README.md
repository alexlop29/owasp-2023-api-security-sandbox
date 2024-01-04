## About

In the [OWASP 2023 API Security Awareness Report](https://owasp.org/API-Security/editions/2023/en/0x03-introduction/), Broken Object Level Authorization is listed as the top API security vulnerabiltity, as identified by numerous bug bounty platforms and publicly available reports. Refer to the [terminology](#🔖-terminology) section for addititional insight.

The purpose of this project is to provide a practical walk-through of the vulnerability, and work to implement best practices in each presented scenario.

## Scenario

> Scenario #1: An e-commerce platform for online stores (shops) provides a listing page with the revenue charts for their hosted shops. Inspecting the browser requests, an attacker can identify the API endpoints used as a data source for those charts and their pattern: /shops/{shopName}/revenue_data.json. Using another API endpoint, the attacker can get the list of all hosted shop names. With a simple script to manipulate the names in the list, replacing {shopName} in the URL, the attacker gains access to the sales data of thousands of e-commerce stores.

## Getting Started

## 🔧 Core libraries

- [Node.js(20.10.0)](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com)
- [Auth0 express-openid-connect](https://www.npmjs.com/package/express-openid-connect)
- [dotenv](https://www.npmjs.com/package/dotenv)

### Development Libraries

- [Nodemon](https://nodemon.io/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org)
- [Jest](https://jestjs.io)
- [Sinon.js](https://sinonjs.org)
- [SuperTest](https://www.npmjs.com/package/supertest)
- [Selenium](https://www.selenium.dev/selenium/docs/api/javascript/index.html)
- [ts-node](https://www.npmjs.com/package/ts-node)

### Type Libraries

- [@types/express](https://www.npmjs.com/package/@types/express)
- [@types/sinon](https://www.npmjs.com/package/@types/sinon)
- [@types/supertest](https://www.npmjs.com/package/@types/supertest)
- [@types/selenium-webdriver](https://www.npmjs.com/package/@types/selenium-webdriver)

## 🏭 Running Tests

```
npm test
npm test -- shopRoute.test.ts
```

## 🔖 Terminology

### [Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)

Definition

> Every API endpoint that receives an ID of an object, and performs any action on the object, should implement object-level authorization checks. The checks should validate that the logged-in user has permissions to perform the requested action on the requested object...In the case of BOLA, it's by design that the user will have access to the vulnerable API endpoint/function. The violation happens at the object level, by manipulating the ID.

Prevention

> Use the authorization mechanism to check if the logged-in user has access to perform the requested action on the record in every function that uses an input from the client to access a record in the database...Write tests to evaluate the vulnerability of the authorization mechanism. Do not deploy changes that make the tests fail.

## Bonus

There are additional security vulnerabilties in this repository beyond BOLA. Can you spot them?

## Recommended Reading

- [Web Security Academy alignment with the OWASP Top 10 API vulnerabilities](https://portswigger.net/web-security/api-testing/top-10-api-vulnerabilities)
