import { Link } from 'react-router-dom'

const LoadingList = () => {
    return (
        <div className=' chatList font-[380]  font-sans flex flex-col w-40 p-2 '>
            <span className='title  font-[700] text-xs mb-2'> </span>
            <Link className='hoverChat'  to="/dashboard "> </Link>
            <Link className='hoverChat' to="/"> </Link>
            <Link className='hoverChat' to="/"> </Link>
            <div className='list flex overflow-scroll scrollBar  flex-col '>
                <Link className='hoverChat' to="/"> </Link>
                <Link className='hoverChat' to="/"></Link>
                <Link className='hoverChat' to="/"> </Link>
                <Link className='hoverChat' to="/"> </Link>
            </div>
        </div>
    )
}

export default LoadingList