import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Github from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
