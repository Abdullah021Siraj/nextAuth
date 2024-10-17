"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";
import { UserButton } from "./user-button";


const Navbar = () => {
  const pathname = usePathname();

  return (
  <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl shadow-sm mx-auto my-4 max-w-[600px] w-full">
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
        <Link href="/admin">Admin</Link>
      </Button>
      <Button asChild variant={pathname === "/settings" ? "default" : "outline"}>
        <Link href="/settings">Settings</Link>
      </Button>
    </div>
    <UserButton />
  </nav>
);

};

export default Navbar;