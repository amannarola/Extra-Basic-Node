const crypto = require('crypto');

console.log(crypto.getHashes());
console.log(crypto.getCiphers());

crypto.randomBytes(16, (err, buf) => {
    //console.log(buf.toString('hex'));
});

let iv = crypto.randomBytes(16);

let hash = crypto
    .createHash('sha1')
    .update('your message')
    .digest('hex');

//console.log(hash);

// aes 256-bit cipher block chaining (cbc) encryption/decryption
let secret_message = 'Aman Narola';
let key = crypto.scryptSync(secret_message, 'salt', 24);

let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
let encrypted = cipher.update(secret_message, 'utf-8', 'hex');
encrypted += cipher.final('hex');

console.log('encrypted: ' + encrypted)

let decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

console.log('decrypted: ' + decrypted); 
