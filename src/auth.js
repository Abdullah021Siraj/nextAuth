import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserById } from "../data/user";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  callbacks: {
    async session({token, session}){
      if(token.sub && session.user){
          session.user.id = token.id
        }
  
        if(token.role && session.user){
          session.user.role = token.role 
        }

        return session;
    },
    async jwt({token}){ 
      if(!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if(!existingUser) return token
      token.role = existingUser.role
      return token
    }
  },
  adapter: PrismaAdapter(db), // Sets up the Prisma adapter using the db instance. This allows NextAuth to manage user data through Prisma.
  session: { strategy: "jwt" }, // web token for session management. User sessions are maintained via tokens rather than server-side sessions
  ...authConfig, //  Spreads any additional configuration options imported from the auth.config file.
});
