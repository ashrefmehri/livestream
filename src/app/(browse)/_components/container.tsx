'use client'

import { cn } from "@/lib/utils"
import { useSideBar } from "../../../../store/use-sidebar"
import { useEffect } from "react"
import {useMediaQuery } from "usehooks-ts"
interface ContainerProps{
    children :React.ReactNode
}


const container = ({children}:ContainerProps) => {
   
    const {
        collapsed,
        onCollapse,
        onExpand,
    } =useSideBar((state)=>state)
    const isSmallScreen = useMediaQuery("(max-width: 1024px)")
    useEffect(()=>{
        if(isSmallScreen){
            onCollapse()
        }
        else{
            onExpand()
        }
        },[isSmallScreen,onCollapse,onExpand])
  return (
    <div className={cn(
        "flex-1",
        collapsed ? "ml-[96px]" : "ml-[70px] lg:ml-[16.5rem]",
        )}>
        {children}
    </div>
  )
}

export default container