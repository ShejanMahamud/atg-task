import React, { useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar open={open} setOpen={setOpen}/>
      <Outlet/>
      <button onClick={()=>setOpen(true)} style={{
        background: 'linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)',
        border: 'none',
        zIndex: '1000', 
        color: '#FFFFFF', 
        cursor: 'pointer',
      }} className='fixed bottom-5 right-5 p-4 rounded-full lg:hidden inline-block'>
      <BsFillPencilFill/> 
      </button>
    </>
  )
}

export default RootLayout