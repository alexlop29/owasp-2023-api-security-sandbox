## About

In the [OWASP 2023 API Security Awareness Report](https://owasp.org/API-Security/editions/2023/en/0x03-introduction/), Broken Object Level Authorization and Unrestricted Resource Consumption are listed as two of the top five API vulnerabilties, as identified by numerous bug bounty platforms and publicly available reports. Refer to the [terminology](#🔖-terminology) section for addititional insight into each vulnerability.

The purpose of this project is to provide a practical walk-through of each vulnerability, and work to implement best practices in each presented scenario.

## Scenarios

> Scenario #1: An e-commerce platform for online stores (shops) provides a listing page with the revenue charts for their hosted shops. Inspecting the browser requests, an attacker can identify the API endpoints used as a data source for those charts and their pattern: /shops/{shopName}/revenue_data.json. Using another API endpoint, the attacker can get the list of all hosted shop names. With a simple script to manipulate the names in the list, replacing {shopName} in the URL, the attacker gains access to the sales data of thousands of e-commerce stores.

> Scenario #2: A service provider allows clients to download arbitrarily large files using its API. These files are stored in cloud object storage and they don't change that often. The service provider relies on a cache service to have a better service rate and to keep bandwidth consumption low. The cache service only caches files up to 15GB.When one of the files gets updated, its size increases to 18GB. All service clients immediately start pulling the new version. Because there were no consumption cost alerts, nor a maximum cost allowance for the cloud service, the next monthly bill increases from US$13, on average, to US$8k.

## Getting Started

## 🔧 Core libraries

- [Node.js(20.10.0)](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)

### Development Libraries

- [Nodemon](https://nodemon.io/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org)
- [Jest](https://jestjs.io)
- [Sinon.js](https://sinonjs.org)
- [SuperTest](https://www.npmjs.com/package/supertest)

## Postman Collection

## 🏭 Running Tests

## Disclaimer

- Add a note to discuss typically storing the data in an external backend, and using Sinon to mock the functions, etc.

## 🚧 To Do

## 🔖 Terminology

### [Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)

Definition

> Every API endpoint that receives an ID of an object, and performs any action on the object, should implement object-level authorization checks. The checks should validate that the logged-in user has permissions to perform the requested action on the requested object...In the case of BOLA, it's by design that the user will have access to the vulnerable API endpoint/function. The violation happens at the object level, by manipulating the ID.

Prevention

> Use the authorization mechanism to check if the logged-in user has access to perform the requested action on the record in every function that uses an input from the client to access a record in the database...Write tests to evaluate the vulnerability of the authorization mechanism. Do not deploy changes that make the tests fail.

### [Unrestricted Resource Consumption](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/)

Definition

> Satisfying API requests requires resources such as network bandwidth, CPU, memory, and storage. Sometimes required resources are made available by service providers via API integrations, and paid for per request, such as sending emails/SMS/phone calls, biometrics validation, etc...An API is vulnerable if limits are missing or set inappropriately (e.g. too low/high).

Prevention

> Implement a limit on how often a client can interact with the API within a defined timeframe (rate limiting)...Rate limiting should be fine tuned based on the business needs. Some API Endpoints might require stricter policies.

## Helpful Documentation:

- [ReadFile vs ReadFileSync - Stack Overflow](https://stackoverflow.com/questions/17604866/difference-between-readfile-and-readfilesync)
- [ReadFile vs ReadFileSync - Node.js Documentation](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback)

Research any versus unknown in Typescript.

Left off:
- Improve error handling in the shops test / controller
