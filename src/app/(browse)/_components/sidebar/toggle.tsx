"use client"
import { Button } from "@/components/ui/button"
import { useSideBar } from "../../../../../store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react"
import { Hint } from "@/components/hints" 
const toggle = () => {
    const {collapsed , onExpand , onCollapse} = useSideBar((state)=> state)
    const label = collapsed ? "Show" : "Hide"
  return (
    <>
    {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-3 mb-3">
        <Hint label={label} side="right" asChild >
         <Button
          className="hover:bg-[#4a4a4d] "
          size='sm'
          onClick={onExpand}
          >
             <ArrowRightFromLine className="h-4 w-4  text-white "/>
         </Button>
         </Hint>
        </div>
    )}
    {!collapsed && (
        <div className="p-3 mt-2  font-bold  text-[13px] flex items-center justify-center ">
            <p className="uppercase">Recommended channels</p>
            <Hint label={label} side="right" asChild>
            <Button 
            className="h-auto  ml-auto hover:bg-[#4a4a4d]"
            onClick={onCollapse}
            size='sm'
            >
                <ArrowLeftFromLine className="h-4 w-4  "/>
            </Button>
            </Hint>
        </div>
    )}
    </>
  )
}

export default toggle