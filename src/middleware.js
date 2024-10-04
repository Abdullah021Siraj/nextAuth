// This code is setting up a middleware function in a Next.js application using NextAuth.js for authentication.
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

//This initializes NextAuth with the provided configuration and extracts the auth middleware function.
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix); // api routes
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname); // home page
  const isAuthRoute = authRoutes.includes(nextUrl.pathname); // login & register

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)); // settings page
    }
    return null;
  }

  if (!isPublicRoute && !isLoggedIn) {
    return Response.redirect(new URL("/auth/login", nextUrl)); // login page
  }
  return null;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
