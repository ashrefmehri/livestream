'use client'
import { useSideBar } from "../../../../../store/use-sidebar"
import { cn } from "@/lib/utils"
interface WrapperProps {
    children: React.ReactNode
}
const wrapper = ({children}:WrapperProps) => {
    const {collapsed} = useSideBar((state)=>state)
  return (
    <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-[#1F1F23] z-49",collapsed && "w-[70px]")}>
        {children}
    </aside>
  )
}

export default wrapper