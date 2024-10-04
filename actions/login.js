"use server";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

//This directive indicates that the function can run on the server, enabling server-side actions.

export const login = async (values) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
  
  // console.log("Validated email and password:", email, password);

  // try {
  //   console.log("Calling signIn function...");
  //   await signIn("credentials", {
  //     email,
  //     password,
  //     redirectTo: DEFAULT_LOGIN_REDIRECT,
  //   });
  // } catch (error) {
  //   console.error("Error in signIn function:", error);
  //   if (error instanceof AuthError) {
  //     switch (error.type) {
  //       case "CredentialsSignin":
  //         console.error("Invalid credentials!");
  //         return { error: "Invalid credentials!" };
  //       default:
  //         console.error(`Unknown AuthError type: ${error.type}`);
  //         return { error: "Something went wrong!" };
  //     }
  //   } else {
  //     console.error(`Error: ${error.message}`);
  //     throw error;
  //   }
  // }


};
