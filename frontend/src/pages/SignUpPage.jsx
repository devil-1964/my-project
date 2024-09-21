import { SignUp } from '@clerk/clerk-react'
const SignUpPage = () => {
  return (
    <div className='signUpPage flex justify-center h-full items-center '><SignUp path="/sign-up" signInUrl="/sign-in" /></div>
  )
}

export default SignUpPage