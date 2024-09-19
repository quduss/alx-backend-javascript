const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it('should log the total of 100 + 20 and call console.log once', function () {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(consoleSpy, 'The total is: 120');

    sinon.assert.calledOnce(consoleSpy);
  });

  it('should log the total of 10 + 10 and call console.log once', function () {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledWith(consoleSpy, 'The total is: 20');

    sinon.assert.calledOnce(consoleSpy);
  });
});
