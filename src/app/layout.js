import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
 
  const session = await auth();

  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}</body>
    </html>
    </SessionProvider>
  );
}
