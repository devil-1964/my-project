import { CircleArrowUpIcon, Paperclip } from "lucide-react";
import { useEffect, useRef } from "react";

const NewPrompt = () => {
  const endRef=useRef(null);
  useEffect(()=>{
    endRef.current.scrollIntoView({behavior:"smooth"});
  },[]);
  
  return (
    <>
    <div ref={endRef} className="endChat ">
      <form className="newForm absolute bottom-0 flex w-[71.5%] gap-1 bg-[#3e3a3e] rounded-full px-2 mb-3 items-center">
        <label htmlFor="file">
          <Paperclip className="opacity-55" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-initial w-full outline-none text-zinc-300 p-2 bg-transparent"
        />
        <button>
          <CircleArrowUpIcon size={"1.75rem"} className="opacity-55" />
        </button>
      </form>
      </div>
    </>
  );
}

export default NewPrompt;
