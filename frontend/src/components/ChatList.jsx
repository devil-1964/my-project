import { Link } from 'react-router-dom'

const ChatList = () => {
    return (
        <div className=' chatList font-[380] transition-transform duration-300 ease-in-out transform -translate-x-full appear-animation font-sans flex flex-col w-40 p-2 '>
            <span className='title  font-[700] text-xs mb-2'>DASHBOARD</span>
            <Link className='hoverChat'  to="/dashboard ">Create a new Chat</Link>
            <Link className='hoverChat' to="/">Talk to Intellichat</Link>
            <Link className='hoverChat' to="/">Contact</Link>
            <hr className='border-none h-0.5 bg-[#ddd] opacity-10 rounded m-2 ' />
            <div className='list flex overflow-scroll scrollBar  flex-col '>
                <Link className='hoverChat' to="/">Chat Title</Link>
                <Link className='hoverChat' to="/">Chat Title</Link>
                <Link className='hoverChat' to="/">Chat Title</Link>
                <Link className='hoverChat' to="/">Chat Title</Link>
            </div>
        </div>
    )
}

export default ChatList