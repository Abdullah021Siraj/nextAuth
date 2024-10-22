import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendPasswordResetEmail = async (email, token) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset Your Password and Get Back to Your Account",
    html: `
      <h2>Password Reset Request</h2>
      <p>Hi there!</p>
      <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
      <p>To reset your password, click the link below:</p>
      <p><a href="${resetLink}" style="background-color: #007bff; color: #ffffff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Reset Password</a></p>
      <p>If you have any issues, feel free to reply to this email or contact our support team.</p>
      <p>Best regards,</p>
      <p>Team</p>
    `,
  });
};

export const sendVerificationEmail = async (email, token) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify Your Email Address and Unlock Your Account",
    html: `
      <h2>Email Verification</h2>
      <p>Hi there!</p>
      <p>We're excited to have you on board! To complete your account setup, please verify your email address by clicking the link below:</p>
      <p><a href="${confirmLink}" style="background-color: #007bff; color: #ffffff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Verify Email</a></p>
      <p>If you have any issues, feel free to reply to this email or contact our support team.</p>
      <p>Best regards,</p>
      <p>Team</p>
    `,
  });
};

export const sendTwoFactorTokenEmail = async (email, token) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Your 2FA Code for Secure Login",
    html: `
      <h2>2-Factor Authentication Code</h2>
      <p>Hi there!</p>
      <p>To complete your login, please enter the 2FA code below:</p>
      <p style="font-size: 20px; font-weight: bold;">${token}</p>
      <p>If you have any issues, feel free to reply to this email or contact our support team.</p>
      <p>Best regards,</p>
      <p>Team</p>
    `,
  });
};