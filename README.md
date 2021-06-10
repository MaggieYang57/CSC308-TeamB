## SLO Hikes     

[![Build Status](https://travis-ci.com/MaggieYang57/CSC308-TeamB.svg?branch=master)](https://travis-ci.com/MaggieYang57/CSC308-TeamB)

CSC 308 Project Group - Bat Battur, Mike Eirinberg, Skylar Kurth, Sarah Rietkerk, Maggie Yang

A user-friendly web app for people to find accurate information and reviews about hikes in San Luis Obispo county that can be filtered for one's personal needs.

Link to Figma UI Prototype: https://www.figma.com/file/RQRZ6Vfh6jEHSwrqPtI0xs/Lofi?node-id=0%3A1


### Running it Locally
- Either download the code and navigate to the folder through the terminal, or use the terminal to navigate to the folder you'd want the project to be in and run `git clone https://github.com/MaggieYang57/CSC308-TeamB.git` to clone the repository.
- There are some files (like .env for frontend and backend) that are not included in this repo for security reasons, but are necessary. Please contact the team to receive the files.
- Use the terminal to navigate to the backend folder
    - Run `npm install && npm start`
    - The backend should start running on http://localhost:3001/
- Open a new terminal window and navigate to the frontend folder
    - Run `npm install && npm start`
    - The frontend should start running on http://localhost:3000/ properly.
Please contact the team if you have any questions or run into any difficulty!
 

### Code Styles

We are using ESLint and Prettier, which should be automatically installed through the `npm install` command. Developers should use ESLint to check syntax, find quality problems and bugs, and enforce a uniform code style. Intergrating Prettier simultaneously formats the code to help enforce a consistent style as well.

Any code contributors should following the guide https://codeburst.io/eslint-everything-you-need-to-know-about-enforcing-a-style-guide-with-eslint-d4520c732dcb.

Our team chose to use the **Standard** style guide for this project.
We initialized .eslintrc.js files for both frontend and backend with the exact same settings. 

To automatically apply Prettier rules for all files, run npx prettier --write .

### Testing

Our team uses Cypress and Jest for automatic acceptance testing as well as integration tests. To run the Cypress tests, you **must have the code running locally**. Then open a new terminal window, navigate to the frontend folder and run `npx cypress open` to open the Cypress UI. From there you can access the integration tests for the different scenarios.

Acceptance Test Specs: https://docs.google.com/document/d/1eiWV-aC5wrnwk2UfMe8jmwRoW73j-rG6PCcg7EF9nvs/edit?usp=sharing

Acceptance Test Code: (frontend > cypress > integration > acceptanceTests)

To run the unit/integration tests for the frontend components written in Jest with the help of the React Testing Library, you must first run an **npm install** in the **/frontend** directory to ensure that your local version has the tesing library and Jest installed. With the right packages installed, you can simply run **npm run test** to see whether or not the tests are passing. To get a coverage report, run **npm run coverage**.

Unit/Integration Test Code: (frontend > src > tests)

![coverage-report](https://user-images.githubusercontent.com/49178322/121458542-685d8400-c95e-11eb-9bfc-d187a82bb96f.PNG)


### Deployment

Our live app is automatically deployed through two separate branches managing the backend and frontend paths. To update the deployed backend, merge any updates to `heroku-backend`. To update the deployed frontend, merge any updates to `heroku-frontend-setup-with-env`. 

The live backend with database calls can be accessed on https://slo-hikes-backend.herokuapp.com/.
The live frontend can be accessed on https://slohikes.herokuapp.com/.

For any Heroku access, please contact our team.

