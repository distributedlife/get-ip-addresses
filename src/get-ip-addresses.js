'use strict';

import os from 'os';
import {map, filter, flatten} from 'lodash';

let ifaces = os.networkInterfaces();

export default function getIpAddresses () {
  return flatten(map(Object.keys(ifaces), ifname => {
    let interfaces = filter(ifaces[ifname], {family: 'IPv4', internal: false});
    return map(interfaces, 'address');
  }));
}