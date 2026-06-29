import { useState } from "react";
import ConversationList from "../components/ConversationList";
import { conversations } from "../data/conversations";
import type { Conversation } from "../types/conversation";
import ConversationDetails from "../components/ConversationDetails";

function Inbox() {

    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
    const [searchText, setSearchText] = useState("");
    // const [filterStatus, setFilterStatus] = useState("All");
    // const [priorityFilter , setPriorityFilter] = useState("All")

    const filteredConversations = conversations.filter((conversation) =>
        conversation.customerName.toLowerCase().includes(searchText.toLowerCase())
    )
    
    console.log(filteredConversations)


    if(!filteredConversations || filteredConversations.length === 0) {
       return (
            <div className="flex items-center justify-center text-center">
                <p className="  text-4xl font-bold m-3 mt-5 p-15  text-amber-800 border-2 h-20 bg-amber-300 w-100 h-100 [word-spacing:1rem]">🕵️ We searched everywhere... nothing found.</p>
            </div>
       )    
    }

    return (
        <>
       
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1 className="text-3xl font-bold text-lime-500 m-4 p-3">Inbox</h1>

         <div>
            <input
            type="text"
            placeholder="Search conversations..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-auto"
          />
        </div>

            <div className="flex flex-row justify-center items-start w-full max-w-4xl mt-4">
                 <div className="flex flex-col w-1/2">
                      <ConversationList 
                    conversations={filteredConversations} 
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