"use client"
import * as z from "zod"
import { LoginSchema } from "../../../../../schemas"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { Form , FormControl, FormField , FormItem , FormLabel,FormMessage} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FormErros from "@/components/form-errors"
import { useTransition } from "react"
import {login} from "../../../../../actions/login"
const connectForm = () => {
  const [isPending,startTransition] = useTransition()
const form = useForm<z.infer<typeof LoginSchema>>({
  resolver: zodResolver(LoginSchema),
  defaultValues: {
    username: "",
    password: "",
  },
})
const onSubmit = (values:z.infer<typeof LoginSchema>) => {
  startTransition(()=>{
    login(values);
  })
}

  return (
    <>
    <Form {...form}>
    <FormErros/>

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
        Connect
      </Button>
      </form>
    </Form>
    
    </>
  )
}

export default connectForm