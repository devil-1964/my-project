import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/logo.png"
import { SignedIn, UserButton } from "@clerk/clerk-react";


const RootLayout = () => {
  return (

      <div className='px-12 py-4 flex flex-col h-screen '>
        <header className='flex items-center justify-between'>
          <Link to="" className='flex items-center font-bold '>
            <img src={logo} alt="" className='w-12 ' />
            <span>INTELLICHAT</span>
          </Link>
          <div className="user rounded-full p-1">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
        </header>
        <main className='bg-[#312f31]  flex-1 overflow-hidden'>
          <Outlet />
        </main>
      </div>
  )
}

export default RootLayout