'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { NavDropdown } from './NavDropdown'
import Image from 'next/image'

const Navbar = () => {

  const [openSearch, setopenSearch] = useState(false)
  console.log(openSearch);
  
  return (
    <>
    <div className='w-screen md:w-full flex justify-between py-3 md:pt-2 md:pb-1 relative '>

         <div className="flex max-w-sm items-center md:w-56 lg:w-72 w-6 rounded-full border-0 md:border-2 md:rounded-sm relative md:bg-muted/50 justify-center">
         <Input className={`outline-0 border-0 border-none hidden md:block w-full`}type="email" placeholder="Search" />
      
      
      <Image onClick={()=>setopenSearch(!openSearch)} className='opacity-50 absolute right-2 top-0 h-full' alt='bb' src={'/Union.svg'} width={20} height={20}/>
    </div>
    <div className='flex gap-4 items-center justify-center'>
    <Image alt='bb' src={'/ic_round-notifications.svg'} width={20} height={20}/>
    <Image alt='bb' src={'/Vector.svg'} width={20} height={20}/>
    <div className='rounded-full size-6  overflow-hidden'>
      <Image className='bg-cover bg-center rounded-full' alt='PP' src={'/dp.svg'} width={30} height={30}></Image>
    </div>
    <div className='flex gap-2 items-center justify-center '>
        <h2 className='hidden md:block'>Admirra John</h2>
        <NavDropdown ></NavDropdown>
    </div>
    </div>

  


    </div>
    
   </>
  )
}

export default Navbar