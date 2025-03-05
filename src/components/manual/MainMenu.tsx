import React from 'react'
import MainMenuItem from './MainMenuItem'

const MainMenu = () => {
  return (
    <div className='w-full h-full lg:p-3 md:p-1 p-4 flex flex-col items-start justify-start gap-4 md:gap-8 lg:gap-4'>
        <p className='md:w-full text-xs uppercase text-gray-400 font-semibold tracking-tighter md:text-center lg:text-left'>Main menu</p>
        <MainMenuItem name={'Dashboard'} path={'/ic_dashboard.svg'}></MainMenuItem>
        <MainMenuItem name={'Recruitment'} path={'/ic_recruitment.svg'}></MainMenuItem>
        <MainMenuItem name={'Schedule'} path={'/ic_calendar.svg'}></MainMenuItem>
        <MainMenuItem name={'Employee'} path={'/ic_employee.svg'}></MainMenuItem>
        <MainMenuItem name={'Department'} path={'/ic_department.svg'}></MainMenuItem>
        
    </div>
  )
}

export default MainMenu