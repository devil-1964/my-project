import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const DashBoardLayout = () => {
const {userId,isLoaded}= useAuth()
const navigate=useNavigate();
useEffect(()=>{
  if(isLoaded && !userId){
    navigate("/sign-in");
  }
},[isLoaded,userId,navigate])

if(!isLoaded)
  return "Loading..."

  return (
    <div >
        <div>MENU</div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardLayout