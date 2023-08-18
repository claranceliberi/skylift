
import OpenAI from 'openai';
import React from 'react';

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser:true
});

export type Message = {
    role: "user" | "assistant";
    content: string;
  }

export function useSdk(){
    const [messages, setMessages] = React.useState<Message[]>([]);

    async function askQuestion(prompt: string) {
        const completion = await openai.chat.completions.create({
          messages: [...messages, {role: 'user', content: prompt}],
          model: 'gpt-3.5-turbo',
        });
    
        const msg = completion.choices[0].message as Message
    
        setMessages((oldMessages) => [...oldMessages, msg])

        saveLogs({prompt:{role: 'user', content: prompt}, response:msg})

      }



    


      return {
        messages,
        setMessages,
        askQuestion
      }
}

type Log = {
    prompt:Message,
    response:Message
}
async function saveLogs(log: Log){
        await fetch('http://localhost:3001/api/logs', {
            method: 'POST',
            body: JSON.stringify(log)
        })
}