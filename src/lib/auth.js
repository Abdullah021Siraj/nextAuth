import { auth } from "@/auth";

//server

export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

// client

export const currentRole = async () => {
  const session = await auth();
  return session?.user?.role;
};
