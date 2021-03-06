// Feature: Logout
// Users can log out of their acocunts when logged in, removing their info from localStorage.
// We test logging out for when a user is logged in and how it should display the Logout Success page afterwards.

//   Scenario 1: Logged-in user logs out
//     GIVEN I’m a logged-in user 
//     WHEN I click “Logout” on the navigation bar
//     THEN the system will show me the logout success page
//     AND the system removes the user’s info from localStorage

/// <reference types="cypress" />

describe('Signed-in user logs out', () => {
    it('I’m a signed-in user', () => {
      cy.visit('http://localhost:3000/login'); 
      cy.get('form').within(() => {
          cy.get('#user [type="radio"]').not('[disabled]')
          .check().should('be.checked')
          cy.get('input[id="email"]').type('cypresstest@gmail.com');
          cy.get('input[id="password"]').type('Cypress123');
        });
        cy.get('form').within(() => {
          cy.get('#login-button').click();  
      });
      cy.wait(1000);

      // When I click “Logout” on the navigation bar
      cy.get('.form-inline').within(() => {
        cy.get('button').click();  
      });
      cy.wait(1000);

      // Then the system will show me the logout success page
      cy.location().should((location) => {
        expect(location.href).to.eq('http://localhost:3000/logout?')
      })

      // And the system removes the user’s info from localStorage
      cy.getLocalStorage("isLoggedIn").should("equal", 'false');
      cy.getLocalStorage("user_type").should("equal", null);
      cy.getLocalStorage("email").should("equal", null);
      cy.getLocalStorage("_id").should("equal", null);

    });
});