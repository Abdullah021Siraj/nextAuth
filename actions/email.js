"use server";

import { info, transporter } from "../src/lib/mail";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email, token) => {
  try {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;
    const mail = await transporter.sendMail({
      ...info,
      to: email,
      subject: "Verify Your Email Address and Unlock Your Account",
      html: `
     ${confirmLink}
    `,
    });
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: "Error",
        status: 500,
        error: error.toString(),
      })
    );
  }
};

export const sendPasswordResetEmail = async (email, token) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  const mail = await transporter.sendMail({
    ...info,
    to: email,
    subject: "Reset Your Password and Get Back to Your Account",
    html: `
      ${resetLink}
    `,
  });
};

export const sendTwoFactorTokenEmail = async (email, token) => {
  const mail = await transporter.sendMail({
    ...info,
    to: email,
    subject: "Your 2FA Code for Secure Login",
    html: `
      ${token}
    `,
  });
};

export const sendEmail = async (
  receiverEmail,
  message,
  subject
) => {
  try {
    const mail = await transporter.sendMail({
      ...info,
      to: receiverEmail,
      subject: subject,
      // text: message,
      html: message,
    });

    return JSON.parse(JSON.stringify(mail.messageId));
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: "Error",
        status: 500,
        error: error.toString(),
      })
    );
  }
};