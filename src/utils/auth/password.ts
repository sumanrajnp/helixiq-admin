import crypto from 'crypto';

/**
 * Hash a password using SHA-256
 */
export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

/**
 * Verify a password against its hash
 */
export function verifyPassword(password: string, hashedPassword: string): boolean {
  const hashedInput = hashPassword(password);
  return hashedInput === hashedPassword;
}

/**
 * Pre-computed hashed passwords for demo users
 */
export const HASHED_PASSWORDS = {
  helixia: '0a1cd0f38e0fd97b1be8d1c1eec92178cbc1d1ccbe0ecb87097d27b838d0af1f',
  ekbana: '1d4925d85b961b0c5ea71d88e9285e3028895a25bb75ccbd40a21ba4a1ef0ecd',
};