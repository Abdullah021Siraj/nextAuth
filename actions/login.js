"use server";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "../data/user";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken, generateTwoFactorToken } from "@/lib/token";

export const login = async (values) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, code } = validateFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }

  // If email is not verified
  if (!existingUser.emailVerified) {
    const passwordsMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (passwordsMatch) {
      const verificationToken = await generateVerificationToken(
        existingUser.email
      );
      await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
      );

      return { success: "Confirmation email sent!" };
    } else {
      return { error: "Invalid credentials!" };
    }
  }
  // If the email is verified and the password matches
  else if (existingUser.emailVerified) {
    const passwordsMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (passwordsMatch) {
      try {
        await signIn("credentials", {
          email,
          password,
          redirectTo: DEFAULT_LOGIN_REDIRECT,
        });

        return { success: "Logged in successfully!" };
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
    } else {
      return { error: "Invalid credentials!" };
    }
  }
};

