// Feature: Login
//   Making login page access Users database
 
//   Scenario: User logs in with valid credentials
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
          cy.get('#admin [type="radio"]').not('[disabled]')
          .check().should('be.checked')
          cy.get('input[id="email"]').type('test@gmail.com');
          cy.get('input[id="password"]').type('Password123');
        });
      
  });

  it('And click “Log In”', () => {
      cy.get('form').within(() => {
          cy.get('#login-button').click();  
      });
      cy.wait(1000);
      
  });

  it('Then the system successfully redirects me to my profile page', () => {   
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/profile')
    })

  });
});