import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email, token) =>{
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Two Factor Authentication",
    html: `<p>Two Factor Authentication Code is ${token}</p>`,
  })
}

export const sendVerificationEmail = async (email, token) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>Confirm Email <a href=${confirmLink}>here</a> to confirm email</p>`,
  });
};

export const sendPasswordResetEmail = async (email, token) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>Confirm Email <a href=${resetLink}>here</a> to reset password.</p>`,
  });
};
