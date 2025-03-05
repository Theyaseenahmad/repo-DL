import React from 'react'
import { Button } from '../../ui/button'
import Schedules from './Schedules'

const DashboardRightBox = () => {
  return (
    <div className='h-full w-full md:w-full lg:w-[40%] rounded-lg flex flex-col md:flex-row lg:flex-col sm:flex-col p-2 gap-4'>

        <div className=' h-[42%] md:h-[90%] xl:h-[40%] w-full md:w-[40%] lg:w-full overflow-hidden flex flex-col justify-between rounded-lg text-white bg-[#121843] pb-3'>

            <div className='h-12 bg-[#1B204A] p-2 flex items-center justify-start px-4'>
                Recent Activity
            </div>

            <div className='flex flex-col p-2 px-4 gap-2'>

                <p className='text-xs text-gray-400'>10.40 AM, Fri 10 Sept 2021</p>
                <p className='text-lg font-medium text-white'>You Posted a New Job</p>
                <p className='text-sm font-light text-gray-400'>Kindly check the requirements and terms of work and make sure everything is right.</p>

            </div>

            <div className='flex md:flex-col md:gap-4 md:items-start justify-between p-2 items-center px-4'>
                <p className='md:font-light md:text-gray-300 md:text-sm'>Today you makes 12 Activity</p>

                <Button className='bg-red-500 hover:bg-red-800'>See all Activity</Button>
            </div>
        </div>


         <div className="h-[45vh] md:h-[28vh] flex-1 rounded-xl md:min-h-min flex flex-col justify-between gap-2 border-[1px] md:mb-4 mb-2" >
       
                 <div className='w-full flex justify-between items-center p-2 px-4'>
                   <h5 className='font-semi-bold text-xl md:text-lg'>Upcoming Schedule</h5>
                   <h5>13 Jan, 2030</h5>
                 </div>
       
                 <div className='h-[70%] w-[90%] mx-auto flex flex-col gap-1'>

                  <p className='text-xs text-gray-400 capitalize'>priority</p>
                  <div className='overflow-y-auto gap-2 min-h-[30%]  w-full mx-auto'>
                 <Schedules></Schedules>
                 </div>
                 <p className='text-xs text-gray-400 capitalize'>Others</p>

                 <div className='overflow-y-auto gap-2 h-[50%]  w-full mx-auto'>

                 <Schedules></Schedules>
                 <Schedules></Schedules>
                 </div>
                 </div>
         
                 <div className='float-end text-center  text-red-400 font-bold border-t-[1px] p-2'>See all Announcements</div>
                 </div>
    </div>
  )
}

export default DashboardRightBox