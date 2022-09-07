const os=require('os');
const user=os.userInfo();
// info about current user
console.log(user);
// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds    `);
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);