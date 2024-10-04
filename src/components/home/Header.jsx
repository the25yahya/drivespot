import React, { useState } from 'react'
import Logo from '../ui/logo'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
import DefaultBtn from '../ui/DefaultBtn'
import { FaRegUser } from "react-icons/fa";
import MenuIcon from '../ui/MenuIcon'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import { IoMdClose } from 'react-icons/io';

function Header() {
    const { user,isSignedIn } = useUser()
    const [ dropDown,setDropDown]= useState(false)
    // Function to toggle dropdown
    const toggleDropDown = () => {
        setDropDown(prevState => !prevState)  // Properly toggling the state
    }
  return (
    <nav className='z-10 fixed w-full bg-white flex items-center justify-between p-6 shadow-sm'>
        <Link to='/'><Logo /></Link>
        <ul className='hidden md:flex items-center gap-8'>
            <Link to='/'><li className='font-semibold hover:opacity-50 transition cursor-pointer'>Home</li></Link>
            <Link to='/search'><li className='font-semibold hover:opacity-50 transition cursor-pointer'>Search</li></Link>
            <li className='font-semibold hover:opacity-50 transition cursor-pointer'>New</li>
            <li className='font-semibold hover:opacity-50 transition cursor-pointer'>PreOwned</li>
        </ul>
        {isSignedIn ?
        <div className='flex items-center gap-2'>
            <UserButton />
            <Link to='/profile'><DefaultBtn value='submit car'/></Link>
        </div> :

        <div className='flex items-center gap-2'>
            <SignInButton mode='modal'>
                <button className="flex items-center gap-2">Sign in <span><FaRegUser /></span></button>
            </SignInButton> 
        </div>
        }
        <div onClick={toggleDropDown} className='md:hidden'>
            <div className='fond-bold'>{!dropDown?<MenuIcon />:<IoMdClose/>}</div>
        </div>
        <div className={!dropDown?'hidden':'md:hidden'}>
            <DropDownMenu dropDown={dropDown} toggleDropDown={toggleDropDown} />
        </div>
    </nav>
  )
}

export default Header