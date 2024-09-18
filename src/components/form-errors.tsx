import { CircleAlert } from 'lucide-react';

interface FormErrorProps{
    message?:string
}
const FormErros = ({message}:FormErrorProps) => {
    if (!message) return null;
  return (
    <div className='flex items-center  space-x-2 bg-red-500 mt-4 p-2 rounded'>
        <CircleAlert className="inline-block ml-2 w-6 h-6" />
       <p className='text-[15px]'>{message}</p> 
    </div>
  )
}

export default FormErros