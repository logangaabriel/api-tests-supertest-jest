
# API Tests and Report Generation with Supertest and Jest

This repository demonstrates how to test an API using Supertest with Jest, generate a test report in HTML format, and automatically publish the report to GitHub Pages using a GitHub Actions workflow.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20.12.2 or higher)


## Getting Started

### Cloning the Repository

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/logangaabriel/api-tests-supertest-jest
cd api-tests-supertest-jest
```

### Installing Dependencies

After cloning the repository, navigate to the project directory and install the required dependencies:

```bash
npm install
```

### Running the Tests

You can run the tests using the following command:

```bash
npm test
```

This will execute the tests using Jest and Supertest. Upon completion, a test report in HTML format will be generated.

### Viewing the Report

The test report is generated in the `./reports` directory. You can open it manually in your browser by navigating to `reports/test-report.html`.

### Automating Report Deployment with GitHub Actions

This project includes a GitHub Actions workflow that automatically runs tests and publishes the generated HTML report to GitHub Pages.

#### How It Works

1. **Test Job**: The workflow runs the tests using Jest and Supertest.
2. **Deploy Job**: After successful test execution, the workflow renames the generated report to `index.html` and deploys it to the `gh-pages` branch, making it accessible via GitHub Pages.

#### Triggering the Workflow

The workflow is triggered automatically on every push or pull request to the `main` branch. You can view the published report at `https://logangaabriel.github.io/api-tests-supertest-jest/`.

## Contact

Feel free to reach out if you have any questions or need further assistance.

- Email: [contatologangabriel@gmail.com](contatologangabriel@gmail.com)
- LinkedIn: [Gabriel Logan](https://www.linkedin.com/in/gabriel-logan/)
- Medium: [Cadê meu inseto?](https://medium.com/@gabriellogan.0804)
