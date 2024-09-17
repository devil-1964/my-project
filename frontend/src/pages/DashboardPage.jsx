import { CircleArrowUpIcon, Code, Image, MessageCircleIcon, Paperclip } from "lucide-react";
import logo from "../assets/logo.png";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


const DashboardPage = () => {
  const queryClient = new QueryClient()
  const navigate=useNavigate();
  const mutation = useMutation({
    mutationFn: (text)=>
      {return   fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  text }),
      }).then((res)=>res.json())}
      ,
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ['userChats'] });
      navigate(`/dashboard/chats/${id}`)
    },
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    mutation.mutate(text);
   
  };

  return (
    <>
      <div className="DashboardPage items-center justify-center flex flex-col w-full p-3">
        <div className="texts flex flex-col justify-between h-full gap-12">
          <div className="logo mx-auto h-fit items-center font-semibold flex justify-center text-xl opacity-60">
            <img className="w-10 h-10" src={logo} alt="Logo" />INTELLICHAT
          </div>
          <div className="options pb-10 flex flex-wrap justify-center font-sans opacity-90 gap-6">
            <div className="option gap-2 flex flex-col border-2 border-zinc-300 p-5 rounded-xl">
              <MessageCircleIcon size={"2rem"} className="opacity-55" />
              <span>Start a new conversation</span>
            </div>
            <div className="option gap-1 flex flex-col border-2 border-zinc-300 p-5 rounded-xl">
              <Image size={"2rem"} className="opacity-55" />
              <span>Evaluate images</span>
            </div>
            <div className="option gap-2 flex flex-col border-2 border-zinc-300 p-5 rounded-xl">
              <Code size={"2rem"} className="opacity-55" />
              <span>Assist with programming</span>
            </div>
          </div>
        </div>
        <div className="formContainer mt-auto w-[75%] bg-[#3e3a3e] rounded-full px-2 mb-2">
          <form className="flex gap-1 justify-between " onSubmit={handleSubmit}>
            <label htmlFor="file" className="my-auto">
              <Paperclip className="opacity-55" />
            </label>
            <input id="file" type="file" multiple={false} hidden />
            <input
              type="text"
              name="text"
              autoComplete="off"
              className="flex-initial w-full outline-none text-zinc-300 p-2 bg-transparent"
              placeholder="Ask me Anything..."
            />
            <button>
              <CircleArrowUpIcon size={"1.75rem"} className="opacity-55" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
