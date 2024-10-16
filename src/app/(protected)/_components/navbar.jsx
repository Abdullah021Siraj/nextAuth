"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";


export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary absolute top-4 left-4 right-4 flex justify-between items-center p-4 rounded-b-xl shadow-sm z-10">
      <div className="text-lg font-bold flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};

