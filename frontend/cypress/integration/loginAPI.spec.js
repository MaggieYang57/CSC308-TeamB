describe('Backend running - User test', () => {
    
    context('Given I ran the backend (API)', () => {

        before(() => {
            cy.intercept({
                method: 'GET',
                url: 'http://localhost:3001/',
            }).as('apiCheck');
        });

        it('When I visit the root endpoint it does not smoke!', () => {
            cy.visit('http://localhost:3001/');
            cy.wait('@apiCheck').then((interception) => {
              assert.equal(interception.response.body, 'Hello world!')
            });
        });
    });
});

describe('Adding / Getting User', () => {

    it('Sending a user object for verification', () => {
        cy.request('POST', 'http://localhost:3001/login', { email: 'test@gmail.com' , password: 'Password123', user_type: 'admin'}).then(
            (response) => {
             expect(response.status).to.be.equal(200);
            }
          )
    });

    it('Getting user', () => {
        cy.request('GET', 'http://localhost:3001/login/606e5466e594d5463099f4b1').then(
            (response) => {
                expect(response.status).to.be.equal(200);
                expect(response.body[0]).to.have.property('_id');
                assert.isNotEmpty(response.body[0]._id);
            }
            )
    });

});