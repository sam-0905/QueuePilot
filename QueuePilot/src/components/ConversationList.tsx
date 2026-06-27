import React from 'react'
import { conversations } from '../data/conversations'

const ConversationList = () => {
  return (
    <>    <div>ConversationList</div>
        {
            conversations.map((conversation) => (
                <div key={conversation.id}>
                    <h2>{conversation.customerName}</h2>
                    <h2>{conversation.status}</h2>
                    <h3>{conversation.priority}</h3>
                    <h4>{conversation.waitingTime}</h4>
                </div>
            ))  
        }
    </>
  )
}

export default ConversationList;