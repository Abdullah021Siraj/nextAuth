import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db), // Sets up the Prisma adapter using the db instance. This allows NextAuth to manage user data through Prisma.
  session: { strategy: "jwt" }, // web token for session management. User sessions are maintained via tokens rather than server-side sessions
  ...authConfig, //  Spreads any additional configuration options imported from the auth.config file.
});
