import type { Conversation } from "../types/conversation";

interface ConversationCardProps {  
    conversation: Conversation;
}

const ConversationCard = ({ conversation }: ConversationCardProps) => {
  return (
    <>
    <h1>Conversation Card</h1>
    {
                <div key={conversation.id}>
                    <h2>{conversation.customerName}</h2>
                    <h2>{conversation.status}</h2>
                    <h3>{conversation.priority}</h3>
                    <h4>{conversation.waitingTime}</h4>
                    <p>{conversation.escalationReason}</p>
                    <p>{conversation.aiSummary}</p>
                </div>
        }
   </>
  )
}

export default ConversationCard;