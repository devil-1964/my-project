import { CircleArrowUpIcon, Paperclip } from "lucide-react";

const LoadingChats = () => {

    return (
        <>
            <div className="chatPage bg-[#242424] flex pt-1  py-3 flex-col w-full items-center h-full">
                <div className="chat gap-2  w-full flex flex-col h-full animate-pulse">
                    <div className="mx-6 flex flex-col gap-2">

                        <div className="message bg-[#3e3a3e]  p-3 rounded-xl w-64  text-justify ml-auto h-28"></div>
                        <div className="message bg-[#3e3a3e] p-3 rounded-xl w-64 text-justify  h-28"></div>
                        <div className="message bg-[#3e3a3e] p-3 rounded-xl w-64 text-justify ml-auto h-28"></div>
                        <div className="message bg-[#3e3a3e] p-3 rounded-xl w-64 text-justify h-28"></div>
                    </div>

                    <form className="newForm flex w-[71.4%] gap-1 bg-[#3e3a3e] rounded-full px-2  items-center mx-auto mt-auto">
                        <label htmlFor="file" >
                            <Paperclip className="opacity-55" />
                        </label>
                        <input id="file" type="file" multiple={false} hidden />
                        <input
                            autoComplete="off"
                            type="text" name="text"
                            placeholder="Ask me Anything..."
                            className="flex-initial w-full outline-none text-zinc-300 p-2 bg-transparent"
                        />
                        <button>
                            <CircleArrowUpIcon size={"1.75rem"} className="opacity-55" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoadingChats