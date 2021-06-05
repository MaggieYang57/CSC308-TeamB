describe('Getting all existing reviews using the review endpoint', () => {

  it('Getting all reviews', () => {
    cy.request('GET', 'http://localhost:3001/review').then(
        (response) => {
            expect(response.status).to.be.equal(200);
            assert.isNotEmpty(response.body);
        }
        )
});

  it('Getting all reviews for a user who has reviews', () => {
      cy.request('GET', 'http://localhost:3001/review/user/test@test.com').then(
          (response) => {
              expect(response.status).to.be.equal(200);
              expect(response.body[0]).to.have.property('_id');
              assert.equal(response.body[0].user_email, "test@test.com");
              assert.isNotEmpty(response.body[0]._id);
          }
          )
  });

  it('Getting all reviews for a user who has NO reviews', () => {
    cy.request('GET', 'http://localhost:3001/review/user/your@imaginary.friend').then(
        (response) => {
            expect(response.status).to.be.equal(200);
            assert.empty(response.body);
        }
        )
});


it('Getting all reviews for a single hike', () => {
  cy.request('GET', 'http://localhost:3001/review/hike/604e7e539ef30407604e7a87').then(
      (response) => {
          expect(response.status).to.be.equal(200);
          assert.isNotEmpty(response.body);
      }
      )
});

it('Getting reviews for a hike with NO reviews', () => {
cy.request('GET', 'http://localhost:3001/review/hike/604e7e539ef30407604e7a65').then(
    (response) => {
        expect(response.status).to.be.equal(200);
        assert.empty(response.body);
    }
    )
});

it('Submitting review using to a hike', () => {
  cy.request('POST', 'http://localhost:3001/review/hike/604e7e539ef30407604e7a87', { 
    hike_id: '604e7e539ef30407604e7a87',
    user_email: 'your@nonimaginary.friend',
    user_name: 'test name',
    body: 'This is a testing comment made by cypress',    
  }).then(
      (response) => {
       expect(response.status).to.be.equal(200);
      }
    )
});

it('Checking if the review was added by previously submitted user', () => {
  cy.request('GET', 'http://localhost:3001/review/user/your@nonimaginary.friend').then(
      (response) => {
          expect(response.status).to.be.equal(200);  
          assert.equal(response.body[0].user_email, 'your@nonimaginary.friend');
          assert.equal(response.body[0].body, 'This is a testing comment made by cypress');
      }
      )
});



});