# Test
This foldder contains UI tests done for "https://www.amazon.in/", as well as an API test using cypress(mocha and javascript) to perform a POST request on user data.

# Framework Used
I have used the cypress framework, which is a good tool for api testing and also packages MOCHA & CHAI by default, written in javascript, as these are the preferred recommended for set up

Mocha framework was used in the tests under "integrations" for describing and dividing the testcases. And Chai was used for assertions

# How to set up
- First thing you should do it pull the project via preferred IDE or
- Create a folder, open terminal and navigate to the folder then run command:
`git clone https://github.com/vindah/amazonCypressTest.git`
- Launch IDE and open project
- Navigate to folder on terminal and '**npm install**'

**To run cypress in GUI, in terminal type:** 
`node_module/.bin/cypress open` 
or
 `npx cypress open`
- Select the API test or UI test file 
- RUN TEST!

**To run cypress headless, in terminal, type:**
API: `npx cypress run -- --record --spec "cypress/integration/api-test/post-user.js"`

# Tour
Fixtures folder -> For test data

Integration -> For main test file

cypress.json -> Adjust configuration and add **base url**
