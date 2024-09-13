import { useEffect, useRef } from "react";

const ChatPage = () => {
  const endRef=useRef(null);
  useEffect(()=>{
    endRef.current.scrollIntoView({behavior:"smooth"});
  },[]);
  
  return (
  <>
    <div className="chatPage flex pt-8 p-3 flex-col w-full items-center">
      <div className="wrapper flex-1 scrollBar w-fit max-w-[75%]  overflow-scroll ">
        <div className="chat flex flex-col ">
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">This is message to user</div>
          <div className="message py-5  max-w-[80%]">This is message to ai This is message to aiThis is message to aiThis is message to aiThis is message to aiThis is message to ai</div>
          <div className="message user bg-[#3e3a3e] w-fit p-2 rounded-full ml-auto max-w-[80%]">end</div>
          <div ref={endRef}></div>
        </div>
      </div>
    </div>
  </>
  )
}
 
export default ChatPage