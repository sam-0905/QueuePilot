import { useState } from "react";
import ConversationList from "../components/ConversationList";
import { conversations } from "../data/conversations";
import type { Conversation } from "../types/conversation";
import ConversationDetails from "../components/ConversationDetails";

function Inbox() {

    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

    return (
        <>
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1 className="text-3xl font-bold text-lime-500 m-4 p-3">Inbox</h1>
            <div className="flex flex-row justify-center items-start w-full max-w-4xl mt-4">
                 <div className="flex flex-col w-1/2">
                      <ConversationList 
                    conversations={conversations} 
                    onSelectedConversation={setSelectedConversation} />
                 </div>
                    <div className="flex flex-col w-1/2">
                          <ConversationDetails 
                         selectedConversation={selectedConversation} />
                        </div>
        </div>
            </div>

        </>
    )

}

export default Inbox;