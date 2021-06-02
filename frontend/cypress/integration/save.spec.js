// Feature: Save Hikes
 
//   Scenario 1: Successfully save a hike
//     GIVEN I am logged in
//     AND on a Single Hike page 
//     WHEN I click the "Save Hike" button
//     THEN the button changes from unsaved to saved
//     AND the hike gets saved to my Saved Hikes list associated with my account

/// <reference types="cypress" />

describe('Successfully save a hike', () => {
    it('Given I am logged in', () => {
        if (localStorage.getItem('isLoggedIn').eq(false) )
        {
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
        }  
    });
  
    it('And on a Single Hike page', () => {
        cy.visit('http://localhost:3000/hike/604e7e539ef30407604e7a7b'); 
    });
  
    it('When I click the "Save Hike" button then the button changes from unsaved to saved', () => {   
        cy.get('header').within(() => {
            cy.get('#save-hike').click().contains('Saved!') ;  
        });
    });

    it('And the hike gets saved to my Saved Hikes list associated with my account', () => {   
        cy.visit('http://localhost:3000/profile'); 
        cy.get('.h5 card-text text-left text-primary font-weight-bold').contains('The P');
    });
});

//   Scenario 2: Successfully unsave a hike
//     GIVEN I am logged in
//     AND on a saved Single Hike page 
//     WHEN I click the "Saved!" button
//     THEN the button changes from saved to unsaved
//     AND the hike is removed from my saved hikes list

describe('Successfully unsave a hike', () => {
    it('Given I am logged in and on a Single Hike page', () => {
        cy.visit('http://localhost:3000/hike/604e7e539ef30407604e7a7b'); 
    });
  
    it('When I click the "Save Hike" button then the button changes from unsaved to saved', () => {   
        cy.get('header').within(() => {
            cy.get('#save-hike').click().contains('Save Hike') ;  
        });
    });

    it('And the hike is removed from my saved hikes list', () => {   
        cy.visit('http://localhost:3000/profile'); 
        cy.contains('The P').should('not.exist');
    });
});

//   Scenario 3: Logged-out user attempts to save a hike
//     GIVEN I’m a logged-out user 
//     AND on a Single Hike page 
//     WHEN I click the "Save Hike" button
//     THEN the user is redirected to the login page

describe('Logged-out user attempts to save a hike', () => {
    it('Given I am a logged-out user', () => {
        cy.get('form-inline').within(() => {
            cy.get('.btn btn-outline-light my-2 my-sm-0 m-3 border border-white').click();  
          });
        cy.wait(1000);    
    });
  
    it('And on the Single Hike page', () => {
        cy.visit('http://localhost:3000/hike/604e7e539ef30407604e7a7b'); 
      });
    
    it('When I click the "Save Hike" button', () => {
        cy.get('header').within(() => {
            cy.get('#save-hike').click();  
        });   
    });
  
    it('Then the user is redirected to the login page', () => {   
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/login')
        });
    });
});