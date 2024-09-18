import * as z from "zod"
export const LoginSchema = z.object({
    username: z.string().min(2,{message:"Please enter your username"}),
    password: z.string().min(2,{message:"Please enter your password"})
})
export const RegisterSchema = z.object({
    username: z.string().min(2,{message:"Please enter your username"}),
    password: z.string().min(8,{message:"Please enter your password"}),
    email: z.string().email({message:"Please enter a valid email"}),
})
