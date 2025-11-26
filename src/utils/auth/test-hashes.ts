// This file is for testing purposes to generate the hashes
// Run this in Node.js to get the hash values

import { hashPassword } from './password';

console.log('Hashed passwords for testing:');
console.log('helixia:', hashPassword('nextGen1!'));
console.log('ekbana:', hashPassword('123admin@'));

// Expected output:
// helixia: [SHA-256 hash of 'nextGen1!']
// ekbana: [SHA-256 hash of '123admin@']