# Demo Web Shop Automation & API Testing Project

## Project Overview

This project automates the Demo Web Shop application using Playwright and performs REST API testing using Postman and Newman.

The project covers three independent UI automation scenarios and API validation using JSONPlaceholder.

## Tech Stack

- Node.js
- JavaScript
- Playwright
- Postman
- Newman
- Newman HTML Extra Reporter
- Allure Report
- Git and GitHub

## Project Structure

```text
SQA19_DemoWebShop_Project/
│
├── tests/
│   ├── invalid-login.spec.js
│   ├── register-add-to-cart.spec.js
│   └── product-search-checkout.spec.js
│
├── api-tests/
│   └── Demo Web Shop API Testing.postman_collection.json
│
├── reports/
│   └── api-test-report.html
│
├── pages/
├── data/
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Application Under Test

Website: https://demowebshop.tricentis.com

API Base URL: https://jsonplaceholder.typicode.com

## Prerequisites

Install the following tools:

- Node.js and npm
- Visual Studio Code
- Git
- Postman Desktop
- Java JDK 21 (required for Allure report generation)

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project:

```bash
cd SQA19_DemoWebShop_Project
```

Install dependencies:

```bash
npm install
```

Install Playwright Chromium:

```bash
npx playwright install chromium
```

## UI Automation Test Execution

Run Q1 - Invalid Login:

```bash
npm run test:q1
```

Run Q2 - Registration and Add Product to Cart:

```bash
npm run test:q2
```

Run Q3 - Product Search and Complete Checkout:

```bash
npm run test:q3
```

Run all UI tests:

```bash
npm run test:ui
```

## API Testing with Postman and Newman

The Postman collection is located inside the `api-tests` folder.

The collection validates:

1. GET all users.
2. Validate response status and user information.
3. Extract a dynamic User ID.
4. GET a single user using the extracted ID.
5. PUT updated user information.
6. Validate updated name, email, company name, ID and phone number.

Run API tests:

```bash
npm run test:api
```

The Newman HTML report is generated at:

```text
reports/api-test-report.html
```

## Allure Report

Generate the Allure report:

```bash
npm run report:allure
```

Open the report:

```bash
npx allure open allure-report
```

Playwright HTML report:

```bash
npx playwright show-report
```

## Run Complete Test Suite

Run UI tests, generate the Allure report and execute API tests:

```bash
npm run test:all
```

## Git Branches

The project uses separate feature branches for each UI scenario:

- `feature/q1-invalid-login`
- `feature/q2-register-add-to-cart`
- `feature/q3-product-search-checkout`
- `main`

## Reports

- Playwright HTML Report
- Allure Report with test attachments
- Newman HTML Extra API Report

Generated reports are excluded from Git using `.gitignore`.

## Author

SQA Automation Testing Project

**GitHub Repository:** YOUR_GITHUB_REPOSITORY_URL
