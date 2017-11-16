'use strict';

import expect from 'expect';
import os from 'os';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('get ip addresses', function() {
  let spy;
  let getIpAddresses;

  beforeEach(() => {
    spy = sinon.spy(os, 'networkInterfaces');
    getIpAddresses = proxyquire('../src/get-ip-addresses', {
      'os' : os
    }).default;
  });

  afterEach(() => {
    spy.restore();
  });

	it('works on my machine', function() {
    // Arrange

    // Act
    const addresses = getIpAddresses();

    // Assert
    expect(addresses.length).toNotEqual(0);
	});
})