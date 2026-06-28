import type { Conversation } from "../types/conversation";

interface ConversationCardProps {  
    conversation: Conversation;
    onSelect?: (conversation: Conversation) => void;
}

const ConversationCard = ({ conversation, onSelect }: ConversationCardProps) => {

  return (
    <>
      {
                <div key={conversation.id} className="flex flex-row m-2 p-3 w-full h-full" onClick={() => onSelect(conversation)}>
                    <div className="flex flex-col p-4 bg-blue-500 rounded-lg shadow-md text-white w-xs h-auto cursor-pointer hover:bg-blue-600">
                    <h2 className="text-lg font-semibold">{conversation.customerName}</h2>
                    <h2 className="text-md">{conversation.status}</h2>
                    <h3 className="text-sm">{conversation.priority}</h3>
                    </div>
                </div>
        }
   </>
  )
}

export default ConversationCard;