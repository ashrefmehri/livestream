import { IoMdMore } from "react-icons/io";
import Link from 'next/link'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon , X } from "lucide-react";



const Navbar = () => {
  return (
    <div className="bg-[#18181b]">
        <div className="flex justify-between px-5 py-[10px] ">
           
           {/** left side .. logo - explore - more options */}
        <div className="flex items-center justify-center space-x-7">
        <div className="logo">
            <Link href='/'>
          <h1 className="text-white text-2xl font-bold">Livestream</h1>
            </Link>
        </div>
        <div className="nav text-white font-bold ">
            <ul>
                <li className="cursor-pointer" >
                    Explore 
                </li>
            </ul>
        </div>
        <div className="more-options text-white ">
        <IoMdMore size={30} />
        </div>
        </div>

        {/** .. search bar  */}
         <form className="flex items-center w-full lg:w-[400px]">
        <Input type="text" placeholder="Search"
        className="rounded rounded-r-none border-[#777779] "
        ></Input>
        <X className="text-white absolute right-[31.5rem] h-5 w-5"/>
        <Button 
        type="submit"
        variant='secondary'
        size='sm'
        className="rounded rounded-l-none bg-[#2f2f35]"
        >
            <SearchIcon size={20} className="text-white" />
        </Button>
        </form>
        {/** right side.. auth*/}
       
            <div className="auth-btn flex space-x-4">
            <Link href='/sign-in' className="bg-[#2f2f35] font-semibold flex items-center justify-center text-white px-4 text-[14px]  rounded ">
            Connect
            </Link>
           <Link href='sign-up' className="bg-purple-800 font-semibold flex items-center text-white px-4 text-[14px] rounded"> 
             Join Now
            </Link>
         </div>
        
        
        </div>
</div>
  )
}

export default Navbar