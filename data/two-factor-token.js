import { db } from "@/lib/db";

export const getTwoFactorTokenByToken = async (token) => {
  try {
    const twoFactor = await db.twoFactorToken.findUnique({
      where: { token },
    });
    return twoFactor;
  } catch (error) {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email) => {
  try {
    const twoFactor = await db.twoFactorToken.findFirst({
      where: { email },
    });
    return twoFactor;
  } catch (error) {
    return null;
  }
};
