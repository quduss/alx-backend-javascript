const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('Correct status code and result', (done) => {
    const url = 'http://localhost:7865/';

    request.get(url, (err, res, body) => {
      if (err) {
        return done(err);  // Handle error scenario
      }

      // Check the status code
      expect(res.statusCode).to.equal(200);

      // Check the returned message
      expect(body).to.equal('Welcome to the payment system');

      done();  // Test is complete
    });
  });
});

