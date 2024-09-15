import Link from "next/link"


const auth = () => {
  return (
    <div className="auth-btn flex space-x-4">
    <Link href='/sign-in' className="bg-[#2f2f35] hover:bg-[#4a4a4d] font-semibold flex items-center justify-center text-white p-2 text-[14px]  rounded ">
    Connect
    </Link>
   <Link href='sign-up' className="bg-purple-800 hover:bg-purple-700 font-semibold flex items-center text-white p-2 text-[14px] rounded"> 
     Join Now 
    </Link>
 </div>

  )
}

export default auth