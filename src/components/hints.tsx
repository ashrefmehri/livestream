import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

  interface HintsProps {
    label:string;
    children:React.ReactNode;
    asChild?:boolean;
    side?:"top" | "bottom" | "left" | "right";
    align?: "center" | "end" | "start" | undefined
  }
  export const Hint =({
    label,
    children,
    asChild,
    side,
    align,
  }:HintsProps) =>{
return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
      <TooltipTrigger asChild={asChild}>
        {children}
      </TooltipTrigger>
      <TooltipContent side={side} align={align} className="text-black bg-white rounded">
        <p className="font-semibold">
        {label}
        </p>
      </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  
)
  }