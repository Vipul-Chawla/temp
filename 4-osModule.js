//OS Module

const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime
const uptime = os.uptime();
console.log(uptime);

// currentOS info

const currentOS = {
    name: os.type(),
    version : os.version(),
    totalMem: os.totalmem()/(1024 * 1024 * 1024),
    freeMem: os.freemem()/(1024 * 1024 * 1024)
}

console.log(currentOS);