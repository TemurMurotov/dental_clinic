import { SignJWT, jwtVerify } from 'jose';

export const COOKIE_NAME = 'admin_session';
const ALG = 'HS256';

function getSecret() {
  const secret = process.env.SESSION_SECRET || 'dev-secret-change-me';
  return new TextEncoder().encode(secret);
}

export async function signSessionToken(email: string) {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret());
}

export async function verifySessionToken(token: string | undefined): Promise<{ email: string } | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return { email: payload.email as string };
  } catch {
    return null;
  }
}
