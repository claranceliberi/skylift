
export interface ChatMessageProps {
    message: string;
    isSending?: boolean;
}

export default function ChatMessage({message,isSending}: ChatMessageProps){

    return (
        <div className={isSending? 'p-2 bg-blue-500 text-white  max-w-[20rem] rounded m-2' : 'p-2 bg-gray-200 text-gray-900  max-w-[20rem] rounded m-2'} >
            {message}
        </div>
    )
}