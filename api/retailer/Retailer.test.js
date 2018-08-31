const { expect } = require('chai');
const sinon = require('sinon');
const RetailerController = require('./RetailerController');


describe('The Retailer Controller', () => {
  it('is an instance of RetailerController', () => {
    const spy = sinon.spy(RetailerController, 'all');
    expect(spy.calledOnce).to.equal(true);
  });
});

describe('The Retailer Model', () => {
  it('returns a payload', () => {
    expect([1, 2]).to.be.an('array');
  });
});
