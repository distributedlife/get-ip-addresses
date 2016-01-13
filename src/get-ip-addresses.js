'use strict';

import os from 'os';
import {map, filter} from 'lodash/collection';
import {flatten} from 'lodash/array';

let ifaces = os.networkInterfaces();

export default function getIpAddresses () {
  return flatten(map(Object.keys(ifaces), function (ifname) {
    let interfaces = filter(ifaces[ifname], {family: 'IPv4', internal: false});
    return map(interfaces, 'address');
  }));
}