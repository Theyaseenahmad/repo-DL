import React from 'react'
import { SmallBoxType } from './DashboardMiddleBox'

const SmallBox = ({box} : SmallBoxType) => {
  return (
    <div className={`aspect-video rounded-xl ${box.bg} flex flex-col xl:h-full items-start justify-around p-3 `} >
    <h4 className='text-base'>{box.text}</h4>
    <h4 className='text-3xl font-semibold'>{box.number}</h4>
    <h4 className={` text-base ${box.font}`}>{box.highlight}</h4>
</div>
  )
}

export default SmallBox