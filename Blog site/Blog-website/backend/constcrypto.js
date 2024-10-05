// cookie genrator
// const crypto = require('crypto');
// const cookieKey = crypto.randomBytes(32).toString('hex');
// console.log(cookieKey);

// key genrator

const crypto = require('crypto');
const tokenSecret = crypto.randomBytes(32).toString('hex');
console.log(tokenSecret);
