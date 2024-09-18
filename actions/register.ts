"use server"
import * as z from "zod"
import { RegisterSchema } from "../schemas";
import bcrypt from "bcrypt"
import { db } from "@/lib/db"

export const register = async (values:z.infer<typeof RegisterSchema>)=>{
    const validatedFields = RegisterSchema.safeParse(values)

    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors,
            message: "Please fill in all fields"
        }
    }
    const {email, password, username} = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await db.user.findUnique({
        where:{ email }
    })
    if(existingUser){
        return {
            Error: {email: "Email already exists"},
            message: "Please use a different email"
        }
    }
    const newUser = await db.user.create({
        data:{
            email,
            username,
            password: hashedPassword
        }
    })
    return {
        success: "User created successfully"
    }
}