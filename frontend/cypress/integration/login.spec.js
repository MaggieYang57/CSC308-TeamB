// Feature: Login
// Users can log in to an existing account for this site in order to be able to save hikes and post reviews.
// We test logging in to an existing account, as well logging in with invalid credentials to display an error message. 
 
//   Scenario 1: User logs in with valid credentials
//     GIVEN I’m a logged-out user 
//     AND I’m on the Login page 
//     WHEN I fill in the User type, Email and Password fields with my credentials and click “Log In”
//     THEN the system successfully finds the saved credentials within the database
//     AND redirects me to my profile page

/// <reference types="cypress" />

describe('User logs in with valid credentials', () => {
  it('Given I’m a logged-out user and I’m on the Login page', () => {
      cy.visit('http://localhost:3000/login');  
  });

  it('When I fill in the User type, Email and Password fields with my credentials', () => {
      cy.get('form').within(() => {
          cy.get('#user [type="radio"]').not('[disabled]')
          .check().should('be.checked')
          cy.get('input[id="email"]').type('cypresstest@gmail.com');
          cy.get('input[id="password"]').type('Cypress123');
        });
      
  });

  it('And click “Log In”', () => {
      cy.get('form').within(() => {
          cy.get('#login-button').click();  
      });
      cy.wait(1000);
      
  });

  it('Then the system successfully finds the saved credentials within the database', () => {   
    cy.request('POST', 'http://localhost:3001/login', { email: 'cypresstest@gmail.com' , password: 'Cypress123', user_type: 'user'}).then(
        (response) => {
            expect(response.status).to.be.equal(200);
        }
    )
  });

  it('And redirects me to my profile page', () => {   
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/profile')
    })

  });
});

//   Scenario 2: User attempts to log in with invalid credentials
//     GIVEN I’m a logged-out user 
//     AND I’m on the Login page 
//     WHEN I fill in the User type, Email and Password fields with invalid credentials and click “Log In”
//     THEN the system unsuccessfully finds the saved credentials within the database
//     AND "Invalid email or password" message pops up
//     AND the system stays on the Login page

describe('User logs in with invalid credentials', () => {
  it('Given I’m a logged-out user and I’m on the Login page', () => {
      cy.visit('http://localhost:3000/login');  
  });

  it('When I fill in the User type, Email and Password fields with invalid credentials', () => {
      cy.get('form').within(() => {
          cy.get('#admin [type="radio"]').not('[disabled]')
          .check().should('be.checked')
          cy.get('input[id="email"]').type('notwork@gmail.com');
          cy.get('input[id="password"]').type('Password123');
        });
      
  });

  it('And click “Log In”', () => {
      cy.get('form').within(() => {
          cy.get('#login-button').click();  
      });
      cy.wait(1000);
      
  });

  it('Then the system unsuccessfully finds the saved credentials within the database', () => {   
    cy.request({
        failOnStatusCode: false,
        method: 'POST',
        url:'http://localhost:3001/login',
        body: { email: 'notwork@gmail.com' , password: 'Password123', user_type: 'admin'}
    }).then(
        (response) => {
            expect(response.status).to.be.equal(404);
        }
    )
  });

  it('"Invalid email or password" message pops up', () => {   
    cy.contains('Invalid email or password')
  });

  it('And the system stays on the login page', () => {   
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/login')
    })

  });
});