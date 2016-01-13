'use strict';

import expect from 'expect';
import getIpAddresses from '../src/get-ip-addresses';

describe('get ip addresses', function () {
  it('works on my machine', function () {
    expect(getIpAddresses().length).toNotEqual(0);
  })
})