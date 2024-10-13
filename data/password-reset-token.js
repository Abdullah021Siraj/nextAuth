import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token) => {
  try {
    const passwordResetToken = await db.PasswordResetToken.findUnique({
      where: { token },
    });
    return passwordResetToken
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email) => {
  try {
    const passwordResetToken = await db.PasswordResetToken.findFirst({
      where: { email },
    });
    return passwordResetToken
  } catch {
    return null;
  }
};
