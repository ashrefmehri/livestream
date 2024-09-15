import { EllipsisVertical } from 'lucide-react';
import { Hint } from '@/components/hints';
const options = () => {
  return (
    <div>
      <Hint label='More Options' side='bottom' asChild>
        <EllipsisVertical className='hover:bg-[#2f2f35] w-8 h-8 hover:rounded p-1 cursor-pointer box-border '/>
        </Hint>
    </div>
  )
}

export default options