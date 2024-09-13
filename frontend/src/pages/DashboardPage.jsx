import {  CircleArrowUpIcon, Code, Image, MessageCircleIcon} from "lucide-react"
import logo from "../assets/logo.png"

const DashboardPage = () => {
  return (<>
    <div className="DashboardPage  items-center justify-center flex flex-col   w-full p-3">
      <div className="texts flex flex-col  justify-between h-full gap-12">
        <div className="logo mx-auto h-fit items-center font-semibold flex justify-center text-xl opacity-60"><img className="w-10 h-10" src={logo} />INTELLICHAT</div>
        <div className="options  pb-10  flex flex-wrap justify-center  font-sans  opacity-90  gap-6">
          <div className="option gap-2 flex flex-col border-2 border-zinc-300 p-5 rounded-xl">
            <MessageCircleIcon size={"2rem"}  className="opacity-55"/>
            <span>Start a new conversation</span>
          </div>
          <div className="option gap-1 flex flex-col  border-2 border-zinc-300 p-5 rounded-xl">
          <Image size={"2rem"} className="opacity-55"/>
            <span>Evaluate images</span>
          </div>
          <div className="option gap-2 flex flex-col border-2 border-zinc-300 p-5 rounded-xl">
          <Code size={"2rem"}  className="opacity-55"/>
            <span >Assist with programming</span>
          </div>
        </div>
      </div>
      <div className=" formContainer mt-auto  w-[75%]  bg-[#3e3a3e] rounded-full px-2">
        <form className="flex gap-5  justify-between">
          <input type="text" className="flex-initial  w-full outline-none text-zinc-300 p-2 bg-transparent" placeholder="Ask me anything..."/>
          <button className="">
            <CircleArrowUpIcon size={"1.75rem"} className="opacity-55"/>
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default DashboardPage