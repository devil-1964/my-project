import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/logo.png"
import { dark } from '@clerk/themes'
import { ClerkProvider } from "@clerk/clerk-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
        variables: {
          spacingUnit: '0.85rem'
        },
        baseTheme: dark,
        elements: {
          card: {
            maxHeight: '23rem',
          },
        },
      }}
      publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className='px-12 py-4 flex flex-col h-screen '>
        <header className='flex items-center justify-between'>
          <Link to="" className='flex items-center font-bold '>
            <img src={logo} alt="" className='w-12 ' />
            <span>INTELLICHAT</span>
          </Link> 
          <div className='user'>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main className='bg-[#312f31] flex-1 overflow-hidden'>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  )
}

export default RootLayout