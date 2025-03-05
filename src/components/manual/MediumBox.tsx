
import React from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { MediumBoxtype } from './DashboardMiddleBox'

const MediumBox = ({box}:MediumBoxtype) => {
  return (
    <div className="min-h-[150px] rounded-xl bg-muted/50 flex py-2 xl:min-h-full" >

    <div className='w-[60%] h-full text-[#161E54] flex flex-col items-start justify-around px-4'>
        <div className='text-md font-semibold'>{box.text}</div>
        <div className='text-4xl font-normal'>{box.number}</div>
        <div className='flex flex-col items-start justify-around text-sm text-gray-500'>
            <h5>{box.men} Men</h5>
            <h5>{box.women} Women</h5>
        </div>
    </div>
    <div className='w-[40%] h-full flex flex-col items-center justify-center p-2'>
        <div className=' rounded-lg overflow-hidden'>
            <Image alt='graph' src={'/g1.svg'} width={200} height={200}></Image>
        </div>
        <Badge className='rounded-md bg-orange-100 text-black' variant="default">{box.percent}</Badge>
        
    </div>
    </div>
  )
}

export default MediumBox