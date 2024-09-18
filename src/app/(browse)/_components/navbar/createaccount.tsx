
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import RegisterForm from "../registerForm/registerForm";
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
   
   <RegisterForm/>
    
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