import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Providers from "next-auth/providers/email";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Providers({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
});
