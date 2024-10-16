import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Minimum 2 character are required" }),
  code: z.optional(z.string())
});
export { LoginSchema };

const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required'
  }),
});
export { ResetSchema };

const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters are required'
  }),
});
export { NewPasswordSchema };

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Minimum 6 characters are required" }),
  name: z.string().min(2, { message: "Minimum 2 characters are required" }),
});

export { RegisterSchema };
