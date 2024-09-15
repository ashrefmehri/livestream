import Logo from "./logo"
import Menu from "./menu"

const Navbar = () => {
  return (
   <nav className="fixed top-0 w-full h-20 z-[49] bg-[#18181b] px-2 lg:px-4 flex justify-between items-center shadow-sm">
    <Logo/>
    <Menu/>
   </nav>
  )
}

export default Navbar