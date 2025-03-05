import React from 'react'
import SmallBox from './SmallBox'
import MediumBox from './MediumBox'
import Announcements from './Announcements'

export type SmallBoxType = {
  box:{
  bg:string,
  text:string,
  number:string,
  highlight:string,
  font:string
}}

export type MediumBoxtype = {
  box:{
  text:string,
  number:string,
  men:string,
  women:string,
  percent:string
}}
const DashboardMiddleBox = () => {

  const SmallBoxData = [
    {
      bg:"bg-orange-100",
      text:"Available Position",
      number:"24",
      highlight:"4 Urgently Needed",
      font:"text-orange-600"
    },
    {
      bg:"bg-blue-100",
      text:"Job Open",
      number:"10",
      highlight:"4 Active Hiring",
font:"text-blue-600"
    },
    {
      bg:"bg-pink-100",
      text:"New Employees",
      number:"24",
      highlight:"4 Department",
  font:"text-pink-600"
    },
  ]

  
  const MediumBoxData = [
    {
      text:"Total Employees",
      number:"216",
      men:"120",
      women:"96",
      percent:"+2% past Month"
    },
    {
      text:"Talent Request",
      number:"16",
      men:"6",
      women:"10",
      percent:"+5% past Month"
    },
  ]


  return (
    <div className="flex flex-1 flex-col gap-4  p-4 pt-0 lg:w-[60%] xl:h-screen  text-[#161E54] ">

          <div className="grid auto-rows-min gap-4 md:grid-cols-3 xl:auto-rows-fr xl:h-[16%]">
            {SmallBoxData.map((box,idx)=>{
              return (
                <SmallBox key={idx} box={box} />
              )
            })}
          

          </div>

          <div className="grid auto-rows-min gap-4 xl:auto-rows-auto md:grid-cols-2 xl:h-[30%]">

          {MediumBoxData.map((box,idx)=>{
              return (
                <MediumBox key={idx} box={box} />
              )
            })}

          </div>

          {/* last box of middle */}

          <div className="min-h-[50vh]  flex-1 relative rounded-xl md:min-h-[30vh] flex flex-col justify-start border-[1px]" >

          <div className='w-full flex justify-between items-center p-2 px-4  h-[20%]'>
            <h5 className='font-semi-bold text-xl'>Announcement</h5>
            <h5>13 Jan, 2030</h5>
          </div>

          <div className='overflow-y-auto  gap-2 md:h-[60%] lg:h-[70%] h-[65%] w-[90%] mx-auto'>
        <Announcements></Announcements>
        <Announcements></Announcements>
        <Announcements></Announcements>
          </div>
  
          <div className='text-center absolute bottom-0 w-full p-2 flex justify-center items-center  text-red-400 font-bold border-t-[1px] md:p-2 '><p>See all Announcements</p></div>
          </div>
        </div>
  )
}

export default DashboardMiddleBox