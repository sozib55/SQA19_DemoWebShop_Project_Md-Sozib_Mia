# Demo Web Shop Automation & API Testing Project

## Project Overview

This project automates the Demo Web Shop application using Playwright and performs REST API testing using Postman and Newman.

The project includes three UI automation scenarios and API testing with JSONPlaceholder.

## Tech Stack

- Node.js and npm
- JavaScript
- Playwright
- Postman Desktop
- Newman
- Newman HTML Extra Reporter
- Allure Report
- Git and GitHub

## Project Structure

```text
SQA19_DemoWebShop_Project_Md-Sozib_Mia/
│
├── tests/
│   ├── invalid-login.spec.js
│   ├── register-add-to-cart.spec.js
│   └── product-search-checkout.spec.js
│
├── pages/
│   ├── LoginPage.js
│   └── RegisterPage.js
│
├── api-tests/
│   └── Demo Web Shop API Testing.postman_collection.json
│
├── reports/
│   └── api-test-report.html
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Application Under Test

**UI Application:** https://demowebshop.tricentis.com

**API Base URL:** https://jsonplaceholder.typicode.com

## Prerequisites

Install the following tools:

- Node.js and npm
- Visual Studio Code
- Git
- Postman Desktop
- Java JDK 21 (required for Allure report generation)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sozib55/SQA19_DemoWebShop_Project_Md-Sozib_Mia.git
```

### 2. Navigate to the Project Folder

```bash
cd SQA19_DemoWebShop_Project_Md-Sozib_Mia
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Chromium

```bash
npx playwright install chromium
```

### 5. Configure Java for Allure

Install Java JDK 21 and configure the `JAVA_HOME` environment variable to point to your JDK installation directory.

Add the JDK `bin` directory to your system `Path`.

Verify the Java installation:

```bash
java -version
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

The Playwright configuration uses Chromium and one worker for sequential test execution.

## API Testing with Postman and Newman

The Postman collection is located in the `api-tests` folder.

The collection covers:

1. GET all users.
2. Validate response status and user information.
3. Extract a dynamic User ID.
4. GET a single user using the extracted ID.
5. PUT updated user information.
6. Validate the updated name, email, company name, ID and phone number.

Run API tests using Newman:

```bash
npm run test:api
```

The Newman HTML Extra report is generated at:

```text
reports/api-test-report.html
```

**Note:** JSONPlaceholder is a demo API. PUT requests return simulated update responses and do not permanently modify the server's stored data.

## Test Reports

### Playwright HTML Report

Open the latest Playwright HTML report:

```bash
npx playwright show-report
```

### Allure Report

Generate the Allure report after running the UI tests:

```bash
npm run report:allure
```

Open the Allure report:

```bash
npx allure open allure-report
```

The Allure report includes test results and available test attachments.

## Run the Complete Test Suite

Run UI tests, generate the Allure report and execute API tests:

```bash
npm run test:all
```

This command clears previous Allure results before running the complete test suite.

## Git Branches

Separate feature branches were used for the UI automation scenarios:

- `feature/q1-invalid-login`
- `feature/q2-register-add-to-cart`
- `feature/q3-product-search-checkout`
- `main`

The feature branches were merged into the main branch.

## Reports and Generated Files

The project generates the following reports:

- Playwright HTML Report
- Allure Report
- Newman HTML Extra API Report

Playwright and Allure generated report folders are excluded from Git through `.gitignore`. The Newman HTML report is available in the `reports` folder.

## Author

**Sozib Mia**

**GitHub Repository:**  
https://github.com/sozib55/SQA19_DemoWebShop_Project_Md-Sozib_Mia
