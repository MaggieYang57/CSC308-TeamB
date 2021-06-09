describe('Getting hike using hike endpoint', () => {

  it('Getting all hikes', () => {
    cy.request('GET', 'http://localhost:3001/hike').then(
        (response) => {
            expect(response.status).to.be.equal(200);
            assert.isNotEmpty(response.body);
        }
        )
});

  it('Getting individual hike', () => {
      cy.request('GET', 'http://localhost:3001/hike/604e7e539ef30407604e7a65').then(
          (response) => {
              expect(response.status).to.be.equal(200);
              expect(response.body[0]).to.have.property('_id');
              assert.isNotEmpty(response.body[0]._id);
              assert.equal(response.body[0]._id, "604e7e539ef30407604e7a65");
          }
          )
  });

  it('Getting non existing hike', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3001/hike/thisHikeDoesNotExist',
      failOnStatusCode: false
    })
      .then(
        (response) => {
            expect(response.status).to.be.equal(404);
        })
});

it('Getting dog friendly hike', () => {
  cy.request('GET', 'http://localhost:3001/hike/dog-friendly').then(
      (response) => {
          expect(response.status).to.be.equal(200);
          assert.equal(response.body[0].dog_friendly, true);
      }
      )
});

});