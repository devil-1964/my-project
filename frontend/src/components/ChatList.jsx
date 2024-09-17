import { Link } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query"
const ChatList = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ["userChats"],
        queryFn: () =>
          fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
            credentials: "include",
          }).then((res) => res.json()),
      });

    return (
        <div className=' chatList font-[380] transition-transform duration-300 ease-in-out transform -translate-x-full appear-animation font-sans flex flex-col w-40 p-2 '>
            <span className='title  font-[700] text-xs mb-1 opacity-80'>DASHBOARD</span>
            <hr className='border-none h-0.5 bg-[#ddd] opacity-10 rounded mb-0.5 ' />
            <Link className='hoverChat px-1' to="/dashboard">Create a new Chat</Link>
            <Link className='hoverChat px-1' to="/">Talk to Intellichat</Link>
            <Link className='hoverChat px-1 mb-1' to="/">Contact</Link>
            <span className='title  font-[700] text-xs my-1 opacity-80'>HISTORY</span>
            <hr className='border-none h-0.5 bg-[#ddd] opacity-10 rounded mb-0.5 ' />
            <div className='list flex overflow-scroll scrollBar  flex-col '>
            {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} className='hoverChat px-1' key={chat._id}>
                {chat.title}
              </Link>
            ))}
            </div>
        </div>
    )
}

export default ChatList