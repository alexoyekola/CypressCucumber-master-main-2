# cypress-cucumber-e2e-testing

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://github.com/Shelex/cypress-mochawesome-reporter

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pre-requisites

1. Node JS
2. Optional: Mochawesome reporter
   Windows/MacOS: npm install cypress-mochawesome-reporter
                  npm install mochawesome-merge
                  npm install mochawesome-report-generator

## 🚀 Install the project

Install project dependencies with: npm i

## Run the scripts:

1. Standard Execution: npm run cypress:execution
2. Mochawesome report run: 
   1. npx cypress run --spec /*.js
   2. npx mochawesome-merge cypress/reports/html/.jsons/*.json > merged-report.json
   3. npx mochawesome-report-generator merged-report.json  
   4. You'll get a report like this one: GitHub Page - Mochawesome Report Sample: (https://www.npmjs.com/package/cypress-mochawesome-reporter)
3. Visual Execution: npx cypress open
   1. Select E2E testing
   2. Select Chrome
   2. Open Specs tab
   3. Select a spec 

