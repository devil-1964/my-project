import { Link } from "react-router-dom"
import bg from "../notfound/bg-dot.png"
import bot from "../assets/bg-bot.png"
const NotFound = () => {
    return (
        <div
            className="flex items-center justify-center h-screen bg-zinc-200"
            style={{
                backgroundImage: `url(${bot})`,
              }}
           >
            <div className="text-center flex  flex-col p-6 rounded-md border-dashed border-4 bg-[#3e3a3e] border-[#9f9a9f] "
             style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'repeat',
                backgroundSize:'cover',

              }}>
               
                <h1 className="text-9xl font-extrabold text-white opacity-95 p-6 text-image" >Oops!</h1>
                <h1 className="text-3xl font-semibold text-white  font-mono pb-6 bg-gradient-to-r from-gray-900 via-black to-zinc-950 bg-clip-text text-transparent">
    404 Page Not Found
</h1>
                <Link to="/">
                    <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold mt-2 mx-auto gap-1 flex items-center bg-white text-black rounded-lg hover:bg-zinc-100 border-2 border-transparent hover:border-black">
                        Go To Homepage
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound