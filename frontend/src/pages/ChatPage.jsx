import { useLocation } from "react-router-dom";
import NewPrompt from "../components/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";

const Message = ({ message }) => (
  <>
    {message.img && (
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
        path={message.img}
        height="300"
        width="400"
        transformation={[{ height: 300, width: 400 }]}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
      />
    )}
    <div
      className={
        message.role === "user"
          ? "message bg-[#3e3a3e] p-3 rounded-xl max-w-[70%] text-justify ml-auto user"
          : "message user w-fit p-2 max-w-[80%]"
      }
      key={message.id} // Assuming each message has a unique `id`
    >
      <Markdown>{message.parts[0].text}</Markdown>
    </div>
  </>
);

const ChatPage = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="chatPage relative flex pt-8 p-3 flex-col w-full items-center">
      <div className="wrapper flex-1 scrollBar w-full max-w-[75%] overflow-scroll">
        <div className="chat gap-2 flex flex-col mb-14">
          {isLoading && "Loading..."}
          {isError && "Something went wrong!"}
          {data?.history?.length === 0 && !isLoading && "No messages yet."}
          {data?.history?.map((message,i) => (
            <Message key={i} message={message} />
          ))}
          {data && <NewPrompt data={data} />}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
