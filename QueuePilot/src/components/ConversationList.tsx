import ConversationCard from "./ConversationCard";
import type { Conversation } from "../types/conversation";


interface ConversationListProps {
    conversations: Conversation[]
    onSelectedConversation?: (conversation: Conversation) => void;    
}   

const ConversationList = ({conversations, onSelectedConversation }: ConversationListProps) => {
  return (
      <>
      
          <h1 className="text-2xl font-bold mb-4">Conversation List</h1>
          {conversations.map((conversation) => (
           <ConversationCard   
           key={conversation.id}
           conversation={conversation}
           onSelect={onSelectedConversation}
           />  
           ))}
    </>
  )
}

export default ConversationList;