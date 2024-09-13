import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return (
    <div className='signInPage flex justify-center h-full items-center '><SignIn path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl="/dashboard"/></div>
  )
}

export default SignInPage