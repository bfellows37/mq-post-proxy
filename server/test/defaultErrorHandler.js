'use strict';

const defaultErrorHandler = require('../src/defaultErrorHandler');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('defaultErrorHandler', () => {

  it('should call res.send with ambiguous error message', (done) => {

    const req = {};
    const sendSpy = sinon.spy();
    const statusSpy = sinon.spy();
    const res = {send: sendSpy, status: statusSpy};
    const error = new Error('wat');

    defaultErrorHandler(error, req, res);
    expect(sendSpy.calledWith('An error occurred.')).to.equal(true);
    done();
  });

});