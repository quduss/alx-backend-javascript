const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy, calculateNumberStub;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');

    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(function () {
    consoleSpy.restore();
    calculateNumberStub.restore();
  });

  it('should call calculateNumber with SUM, 100, and 20, and log the total', function () {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    sinon.assert.calledWith(consoleSpy, 'The total is: 10');
  });
});
