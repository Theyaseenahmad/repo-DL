import React from 'react'
import OthersItem from './OthersItem'

const Other = () => {
  return (
    <div className='w-full h-full md:p-1 lg:p-3  p-4 flex flex-col items-start justify-start gap-4'>
        <p className='md:w-full text-xs uppercase text-gray-400  font-semibold tracking-tighter md:text-center lg:text-left'>Other</p>
        <OthersItem name={'Support'} path={'/ic_support.svg'}></OthersItem>
        <OthersItem name={'Settings'} path={'/ic_settings.svg'}></OthersItem>
    </div>
  )
}

export default Other