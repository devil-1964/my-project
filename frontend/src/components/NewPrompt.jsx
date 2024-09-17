import { CircleArrowUpIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Upload from "./Upload";
import { IKImage } from "imagekitio-react";
import model from "../lib/gemini";
import Markdown from "react-markdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useChat = (data) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {}
  });

  const chat = model.startChat({
    history: [
      { role: "user", parts: [{ text: "Hello" }] },
      { role: "model", parts: [{ text: "Great to meet you. What would you like to know?" }] },
    ],
    generationConfig: {}
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.length ? question : undefined,
          answer,
          img: img.dbData?.filePath || undefined
        })
      }).then(res => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat', data._id] }).then(() => {
        setQuestion("");
        setAnswer("");
        setImg({ isLoading: false, error: "", dbData: {}, aiData: {} });
      });
    },
    onError: (err) => {
      console.error("Error in mutation:", err);
    }
  });

  const add = async (text, isInitial) => {
    if (!isInitial) setQuestion(text);

    try {
      const result = await chat.sendMessageStream(img.aiData.filePath ? [img.aiData, text] : [text]);
      let accumulatedText = "";
      for await (const chunk of result.stream) {
        accumulatedText += await chunk.text();
        setAnswer(accumulatedText);
        mutation.mutate();
      }
    } catch (err) {
      console.error("Error in generating:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (text) add(text, false);
  };

  return {
    question,
    setQuestion,
    answer,
    img,
    setImg,
    handleSubmit,
    add,
  };
};

const NewPrompt = ({ data }) => {
  const {
    question,
    setQuestion,
    answer,
    img,
    setImg,
    handleSubmit,
    add,
  } = useChat(data);

  const endRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [answer, question, img.dbData]);

  const hasRun = useRef(false);
  useEffect(() => {
    if (!hasRun.current && data?.history?.length === 1) {
      add(data.history[0].parts[0].text, true);
      hasRun.current = true;
    }
  }, [data, add]);

  return (
    <>
      {img.isLoading && <div className="animate-pulse w-64 h-40 rounded-xl bg-[#3e3a3e]"></div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData.filePath}
          width="200"
        />
      )}
      {question && <div className="message bg-[#3e3a3e] p-3 rounded-xl max-w-[70%] text-justify ml-auto">{question}</div>}
      {answer && <div className="message user w-fit p-2 max-w-[90%]"><Markdown>{answer}</Markdown></div>}
      <div ref={endRef} className="endChat">
        <form onSubmit={handleSubmit} className="newForm absolute bottom-0 flex w-[71.5%] gap-1 bg-[#3e3a3e] rounded-full px-2 mb-3 items-center" >
          <Upload setImg={setImg} />
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
    </>
  );
};

export default NewPrompt;
