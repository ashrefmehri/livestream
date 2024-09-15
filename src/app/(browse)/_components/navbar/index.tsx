import Auth from "./auth"
import Logo from "./logo"
import Menu from "./menu"
import Options from "./options"
import Search from "./search"

const Navbar = () => {
  return (
   <nav className="fixed top-0 w-full h-14 z-[49] bg-[#18181b] px-2 lg:px-4 flex justify-between items-center shadow-sm">
   <div className="flex items-center justify-center space-x-6">
    <Logo/>
    <Menu/>
    <Options/>
   </div>
   <div className="">
    <Search/>
   </div>
   <div className="">
    <Auth/>
   </div>
   </nav>
  )
}

export default Navbar