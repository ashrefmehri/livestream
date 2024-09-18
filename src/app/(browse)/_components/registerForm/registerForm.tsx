"use client"
import * as z from "zod"
import { RegisterSchema } from "../../../../../schemas"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { Form , FormControl, FormField , FormItem , FormLabel,FormMessage} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FormErros from "@/components/form-errors"
import { useState, useTransition } from "react"
import {register} from "../../../../../actions/register"
const RegisterForm = () => {
  const [isPending,startTransition] = useTransition()
  const [error,setError] = useState<string | undefined>("")
  const [success,setSuccess] = useState<string | undefined>("")
const form = useForm<z.infer<typeof RegisterSchema>>({
  resolver: zodResolver(RegisterSchema),
  defaultValues: {
    username: "",
    password: "",
    email: "",
  },
})
const onSubmit =  (values:z.infer<typeof RegisterSchema>) => {
  setError("")
  setSuccess("")
  startTransition(()=>{
    register(values)
    .then((data)=>{
      if(data.Error){
        setError(data.message)
      }
      if(data.success){
        setSuccess(data.success)
      }
    })
  })
}

  return (
    <>
    <Form {...form}>
    <FormErros message={error} />

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <FormField
          control={form.control}
          name="username"
          render={({field})=>(
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
              <Input disabled={isPending} {...field} type="text" className="border-[#777779] rounded mt-1 focus:border-purple-500 focus:outline-none"></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
          />

<FormField
          control={form.control}
          name="email"
          render={({field})=>(
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
              <Input disabled={isPending} {...field} type="email" className="border-[#777779] rounded mt-1 focus:border-purple-500 focus:outline-none"></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
          />

<FormField
          control={form.control}
          name="password"
          render={({field})=>(
            <FormItem>
              <FormLabel >Password</FormLabel>
              <FormControl>
              <Input disabled={isPending} {...field} type="password" className="border-[#777779] rounded mt-1 focus:border-purple-500 focus:outline-none"></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
          />
        </div>
        <Button  disabled={isPending} className="w-full mt-4 rounded text-white bg-[#4a4a4d] hover:bg-purple-600">
        Register
      </Button>
      </form>
    </Form>
    
    </>
  )
}

export default RegisterForm





{/*import { Button } from "@/components/ui/button"
import { DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"


const registerForm = () => {
  return (
    <>

    {<form>
        <div className="flex flex-col justify-center mt-2">
      <span className="font-semibold text-sm ">Username</span>
      <Input type="text" className="border-[#777779] h-8 rounded mt-1 focus:border-purple-500 focus:outline-none"></Input>
   </div>
    <div className="flex flex-col justify-center mt-2">
      <span className="font-semibold text-sm ">Password</span>
      <Input className="border-[#777779] h-8 rounded mt-1 focus:border-purple-500 focus:outline-none" type="password"></Input>
      <span className="text-[13px] text-[#afafb1] font-medium mt-1">
      The password must be at least 8 characters long.
      </span>
    </div>
    <div className="flex flex-col justify-center mt-2">
      <span className="font-semibold text-sm ">Email</span>
      <Input className="border-[#777779] h-8 rounded mt-1 focus:border-purple-500 focus:outline-none" type="email"></Input>
    </div>
    <DialogDescription className="text-[13px] mt-1 text-[#afafb1] font-medium text-center" >
    By clicking Sign Up, you agree to the <span className="text-purple-500 underline text-[12px] mt-1 hover:text-primary">Terms of Service</span>  and acknowledge that our <span className="text-purple-500 underline text-[12px] mt-1 hover:text-primary">Privacy Notice</span>  applies
    </DialogDescription>
    <div className="flex justify-center mt-4">
      <Button  className="w-full rounded text-white bg-[#4a4a4d] hover:bg-purple-600">
        Create Account
      </Button>
    </div>
    </form>}
    </>
  )
}

export default registerForm*/}