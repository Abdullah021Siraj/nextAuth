import * as z from 'zod';

// export const LoginSchema = () => z.object({
//     email: z.string().email({ message: "Invalid Email" }),
//     password: z.string().min(1, {message: 'Password is required'})
// });
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
export { LoginSchema };


const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message: 'Minimum 6 characters are required'}),
    name: z.string().min(2, {message: 'Minimum 2 characters are required'}),
});
    
export {RegisterSchema};