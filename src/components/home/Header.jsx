import React from 'react'
import Logo from '../ui/logo'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
import DefaultBtn from '../ui/DefaultBtn'
import { FaRegUser } from "react-icons/fa";
import MenuIcon from '../ui/MenuIcon'

function Header() {
    const { user,isSignedIn } = useUser()
  return (
    <nav className='flex items-center justify-between p-6 shadow-sm'>
        <Logo />
        <ul className='hidden md:flex items-center gap-8'>
            <li className='font-semibold hover:opacity-50 transition cursor-pointer'>Home</li>
            <li className='font-semibold hover:opacity-50 transition cursor-pointer'>Search</li>
            <li className='font-semibold hover:opacity-50 transition cursor-pointer'>New</li>
            <li className='font-semibold hover:opacity-50 transition cursor-pointer'>PreOwned</li>
        </ul>
        {isSignedIn ?
        <div className='hidden md:flex items-center gap-2'>
            <UserButton />
            <DefaultBtn value='submit Listing'/>
        </div> :

        <div className='hidden md:flex items-center gap-4'>
            <SignInButton>
                <button className="mr-2 flex items-center gap-2">Sign in <span><FaRegUser /></span></button>
            </SignInButton> 
            <DefaultBtn value='submit Listing'/>
        </div>
        }
        <div className='md:hidden'>
            <div className='fond-bold'><MenuIcon /></div>
        </div>
    </nav>
  )
}

export default Header