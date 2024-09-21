import { CircleArrowUpIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Upload from "./Upload";
import { IKImage } from "imagekitio-react";
import model from "../lib/gemini";
import Markdown from "react-markdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewPrompt = ({ data }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  const chat = model.startChat({
    history: data?.history?.map(({ role, parts }) => ({
      role,
      parts: [{ text: parts[0].text }],
    })),
    generationConfig: {},
  });

  const endRef = useRef(null);
  const formRef = useRef(null);
  const queryClient = useQueryClient();
  const hasRun = useRef(false);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data, question, answer, img.dbData]);

  const mutation = useMutation({
    mutationFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question.length ? question : undefined,
          answer,
          img: img.dbData?.filePath || undefined,
        }),
      }).then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update chat');
        }
        return res.json();
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chat", data._id] })
        .then(() => {
          formRef.current.reset();
          setQuestion("");
          setAnswer("");
          setImg({ isLoading: false, error: "", dbData: {}, aiData: {} })
        });
    },
    onError: (error) => {
      console.error("Error updating chat:", error);
    },
  });

  const addMessage = async (text, isInitial) => {
    if (!isInitial) setQuestion(text);

    try {
      const result = await chat.sendMessageStream(
        Object.entries(img.aiData).length ? [img.aiData, text] : [text]
      );

      let accumulatedText = "";
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        accumulatedText += chunkText;
        setAnswer(accumulatedText);
      }

      mutation.mutate();
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value.trim();
    if (!text) return;

    addMessage(text, false);
  };

  useEffect(() => {
    if (!hasRun.current && data?.history?.length === 1) {
      addMessage(data.history[0].parts[0].text, true);
    }
    hasRun.current = true;
  }, []);

  return (
    <>
      {img.isLoading && (
        <div className="animate-pulse w-64 h-40 rounded-xl bg-[#3e3a3e]"></div>
      )}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData.filePath}
          width="200"
        />
      )}
      {question && (
        <div className="message bg-[#3e3a3e] p-3 rounded-xl max-w-[70%] text-justify ml-auto">
          {question}
        </div>
      )}
      {answer && (
        <div className="message user w-fit p-2 max-w-[90%]">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <div ref={endRef} className="endChat">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="newForm absolute bottom-0 flex w-[71.5%] gap-1 bg-[#3e3a3e] rounded-full px-2 mb-3 items-center"
        >
          <Upload setImg={setImg} />
          <input id="file" type="file" multiple={false} hidden />
          <input
            autoComplete="off"
            type="text"
            name="text"
            placeholder="Ask me Anything..."
            className="flex-initial w-full outline-none text-zinc-300 p-2 bg-transparent"
          />
          <button type="submit">
            <CircleArrowUpIcon size={"1.75rem"} className="opacity-55" />
          </button>
        </form>
      </div>
    </>
  );
};

NewPrompt.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        role: PropTypes.string.isRequired,
        parts: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};


export default NewPrompt;
