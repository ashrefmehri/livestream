"use client"
import React, { useState } from 'react'
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { SearchIcon , X } from "lucide-react";
import qs from 'query-string';
import { useRouter } from 'next/navigation';
const search = () => {
  const [value ,setValue]=useState("")
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!value) return;
    const url = qs.stringifyUrl({
      url:"/search",
      query: {
        term: value
      }
    },{skipEmptyString:true})
    router.push(url);
  };
  const onClear = ()=>{
    setValue("")
    router.push("/");
  }
  return (
    <form onSubmit={handleSubmit} className="relative flex items-center w-full lg:w-[400px]">
    <Input value={value} onChange={(e)=>setValue(e.target.value)}  type="text" placeholder="Search"
    className="rounded rounded-r-none border-[#777779] "
    ></Input>
    {value && (
    <X onClick={onClear} className="text-white absolute right-[3rem] h-5 w-5 cursor-pointer"/>
    )}
    <Button 
    type="submit"
    variant='secondary'
    size='sm'
    className="rounded rounded-l-none bg-[#2f2f35] hover:bg-[#4a4a4d]"
    >
        <SearchIcon size={20} className="text-white" />
    </Button>
    </form>
  )
}

export default search