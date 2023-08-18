import React, { useEffect } from "react";
import ChatMessage from "./components/chat";
import { useSdk } from "./sdk";




const App =  () => {
  const [prompt, setPrompt] = React.useState<string>("");

  const {askQuestion,messages} = useSdk()



  useEffect(() => {
    console.log(messages)
  }, [messages])

  return <div>

    {
      messages.map((message) => <ChatMessage message={message.content} isSending = {message.role === 'user'} />)
    }

    <input className="border-2" type="" value={prompt} onChange={e => setPrompt(e.target.value)}/>
    <button onClick={() => {
      askQuestion(prompt)
      setPrompt("")
    }} className="bg-black text-white p-2"> send</button>

  </div>;
};

export default App;
