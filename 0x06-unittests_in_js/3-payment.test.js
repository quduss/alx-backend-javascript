const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let chai;
  
  before(async function () {
    chai = await import('chai');
  });

  it('should use Utils.calculateNumber to calculate the total', function () {
    const { expect } = chai;
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    expect(calculateNumberSpy.returnValues[0]).to.equal(120);

    calculateNumberSpy.restore();
  });
});
