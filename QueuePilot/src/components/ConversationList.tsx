import ConversationCard from "./ConversationCard";
import type { Conversation } from "../types/conversation";


interface ConversationListProps {
    conversations: Conversation[]
}   

const ConversationList = ({conversations }: ConversationListProps) => {
  return (
      <>
          {conversations.map((conversation) => (
           <ConversationCard   
           key={conversation.id}
           conversation={conversation}
           />  
           ))}
    </>
  )
}

export default ConversationList;