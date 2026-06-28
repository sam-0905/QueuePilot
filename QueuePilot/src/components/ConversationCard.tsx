import type { Conversation } from "../types/conversation";

interface ConversationCardProps {  
    conversation: Conversation;
    onSelect?: (conversation: Conversation) => void;
}

const ConversationCard = ({ conversation, onSelect }: ConversationCardProps) => {

  return (
    <>
    {
                <div key={conversation.id} className="flex m-2 p-3 justify-center items-center" onClick={() => onSelect(conversation)}>
                    <div className="flex flex-col m-2 p-4 bg-blue-500 rounded-lg shadow-md ">
                    <h2 className="text-lg font-semibold">{conversation.customerName}</h2>
                    <h2 className="text-md">{conversation.status}</h2>
                    <h3 className="text-sm">{conversation.priority}</h3>
                    <h4 className="text-xs">{conversation.waitingTime}</h4>
                    <p className="text-sm">{conversation.escalationReason}</p>
                    <p className="text-sm">{conversation.aiSummary}</p>
                    </div>
                </div>
        }
   </>
  )
}

export default ConversationCard;