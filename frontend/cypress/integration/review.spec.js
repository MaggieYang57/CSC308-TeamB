// Feature: Reviews
// Users can read reviews submitted for specific hikes, as well as post new ones if they are logged-in.
// We test redirection when a user is not logged in, and how the review is also visible 
// from the profile when it is properly submitted.

//   Scenario 1: Logged-out user attempts to submit a review
//     GIVEN I’m a logged-out user 
//     AND I’m on the Single Hike page 
//     WHEN I click on "Write a Review"
//     AND click "Submit A Review"
//     THEN I am redirected to the Login page

/// <reference types="cypress" />

describe('Logged-out user attempts to submit a review', () => {
    it('Given I am a logged-out user and on the Single Hike page', () => {
      cy.visit('http://localhost:3000/hike/604e7e539ef30407604e7a7b'); 
    });
  
    it('When I click Write a Review', () => {
      cy.get('.header').within(() => {
        cy.get('#review-button').click();  
      });     
    });

    it('Then I am redirected to the Login page', () => {   
      cy.location().should((location) => {
        expect(location.href).to.eq('http://localhost:3000/login')
      })
    });
  });

//   Scenario 2: Signed-in user submits a review on a hike page
//     GIVEN I’m a logged-in user 
//     AND I’m on the Review page 
//     WHEN I fill in the Review body
//     AND click "Submit A Review"
//     THEN the system shows the Review Success page
//     AND successfully adds the review to the database

describe('Signed-in user submits a review on a hike page', () => {
    it('Given I am a logged-in user', () => {
        cy.visit('http://localhost:3000/login');  
        cy.get('form').within(() => {
            cy.get('#admin [type="radio"]').not('[disabled]')
            .check().should('be.checked')
            cy.get('input[id="email"]').type('test@gmail.com');
            cy.get('input[id="password"]').type('Password123');
          });
        cy.get('form').within(() => {
            cy.get('#login-button').click();  
        });
        cy.wait(1000);

        // And on the review page
        cy.visit('http://localhost:3000/review/604e7e539ef30407604e7a7b');  
        cy.wait(1000);

        // When I fill in the Review body
        cy.get('textarea').type('cypress test');

        // And click "Submit A Review"
        cy.get('#signup-button').click();  
        cy.wait(1000);

        // Then the system shows the Review Success page
        cy.location().should((location) => {
          expect(location.href).to.contain('reviewSuccess')
        })

        // And the system successfully adds the review to the database
        cy.visit('http://localhost:3000/profile'); 
        cy.wait(1000);
        cy.contains('cypress test');
    });
  });
