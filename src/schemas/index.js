import * as z from "zod";
import { UserRole } from "@prisma/client";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Minimum 2 character are required" }),
  code: z.optional(z.string())
});
export { LoginSchema };

const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export { ResetSchema };

const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters are required",
  }),
});
export { NewPasswordSchema };

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Minimum 6 characters are required" }),
  name: z.string().min(2, { message: "Minimum 2 characters are required" }),
});

export { RegisterSchema };

const SettingSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  /*This validation ensures that if a password is provided, a newPassword must also be provided.*/
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New Password is Required!",
      path: ["newPassword"],
    }
  )
  /*This validation seems intended to check that if a newPassword is provided, a password must also be provided.*/
  .refine(
    (data) => {
      if (data.newPassword && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "Password is Required!",
      path: ["password"],
    }
  );
export { SettingSchema };
