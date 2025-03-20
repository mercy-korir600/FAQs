import React from 'react'
import log from "../assets/log.jpg"
import { FiMenu } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
const Navbar = ({SidebarToggle, setSidebarToggle}) => {
  return (
    <div className='bg-white flex justify-between'>
     <div className='flex flex-row'>
 <img src={log} alt="" className='h-20 w-20 ' />
 <FiMenu className='w-6 h-6 mt-7 ml-3' onClick={()=>setSidebarToggle(!SidebarToggle)}/>
 <h1 className='text-blue-700 font-bold text-2xl mt-4 ml-7'>MASINDE MULIRO UNIVERSITY OF SCIENCE AND TECHNOLOGY</h1>
 </div>
 <div className='flex flex-row mt-6 gap-7 mr-6'>
 <RiNotification2Line className='h-7 w-7' />
 <GoPersonFill  className='h-7 w-7 mr-5' />
 <p className='text-blue-700  '>Hi, Mercy</p>
</div>
    </div>
  )
}

export default Navbar