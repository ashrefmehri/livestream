import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ConnectForm from "../connect/connectForm"
const connect = () => {
  return (
    <>
    <div className="connect-btn flex space-x-4">
<Dialog>
   <DialogTrigger className="bg-[#2f2f35] hover:bg-[#4a4a4d] font-semibold flex items-center justify-center text-white p-2 text-[14px]  rounded ">Connect</DialogTrigger>
   <DialogContent>
   <DialogHeader>
   <DialogTitle className="flex items-center justify-center">Connect to LiveStream</DialogTitle>
   </DialogHeader>
    <DialogDescription className="text-center">
     Connect to LiveStream to access your favorite channels, watch videos, and join live streams.
    </DialogDescription>
    <div className="flex space-x-4">
      <Button variant="outline" className="w-full rounded bg-white text-black">
        Sign in with Google
      </Button>
      <Button variant="outline" className="w-full rounded bg-blue-600">
        Sign in with Facebook
      </Button>
    </div>
      <ConnectForm/>
    <DialogDescription className="text-center mt-2">
      Don't have an account? 
      <a href="#" className="text-purple-500 underline  hover:text-primary">Sign up now</a>
    </DialogDescription>
      <DialogTrigger/>
   </DialogContent>
   </Dialog>
   </div>
   </>
  )
}

export default connect