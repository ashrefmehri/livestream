
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
const CreateAccount = () => {
  return (
    <>
    <div className="CreateAccount-btn flex space-x-4">
<Dialog>
   <DialogTrigger className="bg-purple-600 hover:bg-purple-500 font-semibold flex items-center justify-center text-white p-2 text-[14px]  rounded ">Create account</DialogTrigger>
   <DialogContent className="bg-[#2f2f35]">
   <DialogHeader>
   <DialogTitle className="flex items-center justify-center">Join LiveStream today</DialogTitle>
   </DialogHeader>
    <DialogDescription className="text-center">
     CreateAccount to LiveStream to access your favorite channels, watch videos, and join live streams.
    </DialogDescription>
   
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
    <DialogDescription className="text-[13px] text-[#afafb1] font-medium text-center" >
    By clicking Sign Up, you agree to the <span className="text-purple-500 underline text-[12px] mt-1 hover:text-primary">Terms of Service</span>  and acknowledge that our <span className="text-purple-500 underline text-[12px] mt-1 hover:text-primary">Privacy Notice</span>  applies
    </DialogDescription>
    <div className="flex justify-center mt-4">
      <Button  className="w-full rounded text-white bg-[#4a4a4d] hover:bg-purple-600">
        Create Account
      </Button>
    </div>
    <DialogDescription className="text-center mt-2">
    Already have an account? 
<a href="#" className="text-purple-500 underline  hover:text-primary">Connect now</a>
    </DialogDescription>
      <DialogTrigger/>
   </DialogContent>
   </Dialog>
   </div>
   </>
  )
}

export default CreateAccount