import { Modal } from 'antd'
import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoIosSearch, IoMdArrowDropdown } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = ({open,setOpen}) => {
const [signIn, setSignIn] = useState(false)
  return (
    <nav className='lg:flex hidden items-center justify-between my-5 px-10'>
        <div className=''>
            <img src="https://i.ibb.co/MDPqmJC/whole.png" alt="logo.png" />
        </div>
        <div className='bg-[#f2f2f2] rounded-full py-3 pl-6 pr-12 font-medium text-[#5C5C5C] inline-flex items-center gap-3 w-[30%]'>
        <IoIosSearch className='text-xl'/>
        <input type="text" placeholder='Search for your favorite groups in ATG'className='bg-transparent focus:outline-none w-full'/>
        </div>
        <div onClick={()=>setOpen(true)} className='flex items-center gap-[2px] cursor-pointer'>
            <h1 className='font-medium'>Create account. <span className='text-blue-500 font-bold'>It's free</span></h1>
            <IoMdArrowDropdown className='text-xl'/>
        </div>
        <Modal className='min-h-screen relative p-0 lg:w-auto w-full' width={800} open={open} footer={false} closable={false}>
            <div onClick={()=>setOpen(false)} className='bg-white p-1 rounded-full text-2xl text-[#000000] absolute -right-8 -top-8 cursor-pointer lg:inline-block hidden'>

        <IoCloseOutline className=' opacity-60'/> 
            </div>
            <div className='w-full bg-[#EFFFF4] py-3 text-center px-0 mb-5 lg:inline-block hidden'>
                <h1>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
            </div>
            <div className={`w-full ${signIn ? 'hidden': "inline-block"}`}>
            <div className='flex w-full items-center justify-between px-5'>
                <h1 className='text-2xl font-medium'>Create Account</h1>
                <h1 className='text-[#3D3D3D] text-sm lg:inline-block hidden'>Already have an account? <span onClick={()=>setSignIn(true)} className='text-blue-500 font-semibold'>Sign In</span></h1>
                <div onClick={()=>setOpen(false)} className='bg-[#212529] h-6 w-6 flex items-center justify-center rounded-full text-xl text-white cursor-pointer lg:hidden'>

        <IoCloseOutline className=''/> 
            </div>
            </div>
           <div className='w-full grid lg:grid-cols-2 grid-cols-1 row-auto items-center p-5 gap-10'>
               <div className='w-full'>
               <form className='border border-[#D9D9DB] w-full grid grid-cols-2 row-auto items-center bg-[#F7F8FA]'>
                    <input type="text" className=' px-2 py-2 border-b border-[#D9D9DB]  focus:outline-none bg-transparent placeholder:text-[#8A8A8A]' placeholder='First Name'/>
                    <input type="text" className='border-l border-b border-[#D9D9DB] px-2 py-2 focus:outline-none bg-transparent placeholder:text-[#8A8A8A]' placeholder='Last Name'/>
                    <input type="email" className='border-b border-[#D9D9DB] px-2 py-2 focus:outline-none bg-transparent placeholder:text-[#8A8A8A] col-span-2' placeholder='Email'/>
                    <div className='w-full flex items-center justify-between px-2 py-2 bg-transparent col-span-2'>
                    <input type="password" className='  focus:outline-none  placeholder:text-[#8A8A8A] ' placeholder='Password'/>
                    <BsEye className='text-[#8A8A8A]'/>
                    </div>
                    <input type="password" className='border-t border-[#D9D9DB] px-2 py-2 focus:outline-none bg-transparent placeholder:text-[#8A8A8A] col-span-2' placeholder='Confirm Password'/>
                    
                </form>
                <div className='flex items-center w-full justify-between mt-5'>
                <button className='bg-primary px-4 lg:w-full text-white py-2 rounded-full  text-base '>
                        Create Account
                    </button>
                    <span onClick={()=>setSignIn(true)} className='underline underline-offset-4 font-medium lg:hidden inline-block'>or, Sign in</span>
                </div>
                <button className='bg-transparent flex items-center gap-3 border border-[#D9D9DB] px-5 w-full text-[#000000] py-3 justify-center mt-5 text-base '>
                <FaFacebook className='text-lg text-primary'/> 
                <span className='text-sm'>Sign up with Facebook</span>
                    </button>
                <button className='bg-transparent flex items-center gap-3 border border-[#D9D9DB] px-5 w-full text-[#000000] py-3 justify-center mt-3 text-base '>
                <FcGoogle className='text-lg text-primary'/> 
                <span className='text-sm'>Sign up with Google</span>
                    </button>
                    <p className='lg:hidden inline-block w-full text-center text-[#212529] mt-5'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
               </div>
               <div className='w-full lg:inline-block hidden'>
                    <img src="https://i.ibb.co/vmppcKh/atg-illustration.png" alt="login.png" />
                    <h1 className='text-[#000000] opacity-60 text-xs'>By signing up, you agree to our Terms & conditions, Privacy policy</h1>
               </div>
           </div>
            </div>
            <div className={`w-full ${signIn ? 'inline-block' : 'hidden'}`}>
            <div className='flex w-full items-center justify-between px-5'>
                <h1 className='text-2xl font-medium lg:inline-block hidden'>Sign In</h1>
                <h1 className='text-2xl font-medium inline-block lg:hidden'>Welcome Back</h1>
                <h1 className='text-[#3D3D3D] text-sm lg:inline-block hidden'>Not registered? <span onClick={()=>setSignIn(false)} className='text-blue-500 font-semibold'>Sign up</span></h1>
                <div onClick={()=>setOpen(false)} className='bg-[#212529] h-6 w-6 flex items-center justify-center rounded-full text-xl text-white cursor-pointer lg:hidden'>

        <IoCloseOutline className=''/> 
            </div>
            </div>
            
           <div className='w-full grid lg:grid-cols-2 grid-cols-1 row-auto items-center p-5 gap-10'>
               <div className='w-full'>
               <form className='border border-[#D9D9DB] w-full grid grid-cols-1 row-auto items-center bg-[#F7F8FA]'>
                    <input type="text" className=' px-2 py-2 border-b border-[#D9D9DB]  focus:outline-none bg-transparent placeholder:text-[#8A8A8A]' placeholder='First Name'/>
                    <div className='w-full flex items-center justify-between px-2 py-2 bg-transparent '>
                    <input type="password" className='  focus:outline-none  placeholder:text-[#8A8A8A] ' placeholder='Password'/>
                    <BsEye className='text-[#8A8A8A]'/>
                    </div>
                    
                </form>
                <div className='flex items-center w-full justify-between mt-5'>
                <button className='bg-primary px-10 lg:w-full text-white py-2 rounded-full text-base '>
                        Sign In
                    </button>
                    <span onClick={()=>setSignIn(false)} className='underline underline-offset-4 lg:hidden inline-block font-medium'>or, Create Account</span>
                </div>
                <button className='bg-transparent flex items-center gap-3 border border-[#D9D9DB] px-5 w-full text-[#000000] py-3 justify-center mt-5 text-base '>
                <FaFacebook className='text-lg text-primary'/> 
                <span className='text-sm'>Sign up with Facebook</span>
                    </button>
                <button className='bg-transparent flex items-center gap-3 border border-[#D9D9DB] px-5 w-full text-[#000000] py-3 justify-center mt-3 text-base '>
                <FcGoogle className='text-lg text-primary'/> 
                <span className='text-sm'>Sign up with Google</span>
                    </button>
                    <p className='w-full text-center lg:text-base text-sm my-3 font-medium'>Forget Password?</p>
               </div>
               <div className='w-full lg:inline-block hidden'>
                    <img src="https://i.ibb.co/vmppcKh/atg-illustration.png" alt="login.png" />
                    
               </div>
           </div>
            </div>
        </Modal>
    </nav>
  )
}

export default Navbar