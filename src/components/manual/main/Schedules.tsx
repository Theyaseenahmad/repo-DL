import { Ellipsis} from 'lucide-react'
import React from 'react'

const Schedules = () => {
  return (
    <div className='rounded-md flex justify-between items-center text-gray-500 bg-muted/50 border-[1px] border-gray-200 p-2 my-2 '>
            
    <div className='w-[70%] h-full flex flex-col '>
        <p className='text-black'>Review candidate applications</p>
        <p className='text-xs text-gray-500'>Today - 11.30 AM</p>
    </div>

    <div className='h-full w-[25%]  flex items-center justify-center gap-4'>
    <Ellipsis />
    </div>
  </div>
  )
}

export default Schedules