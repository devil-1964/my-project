import { Link } from 'react-router-dom'

const ChatList = () => {
    return (
        <div className=' chatList font-[380] transition-transform duration-300 ease-in-out transform -translate-x-full appear-animation font-sans flex flex-col w-40 p-2 '>
            <span className='title  font-[700] text-xs mb-2'>DASHBOARD</span>
            <Link  to="/dashboard ">Create a new Chat</Link>
            <Link to="/">Talk to Intellichat</Link>
            <Link to="/">Contact</Link>
            <hr className='border-none h-0.5 bg-[#ddd] opacity-10 rounded m-2 ' />
            <div className='list flex overflow-scroll scrollBar  flex-col '>
                <Link to="/">Chat Title</Link>
                <Link to="/">Chat Title</Link>
                <Link to="/">Chat Title</Link>
                <Link to="/">Chat Title</Link>
            </div>
        </div>
    )
}

export default ChatList