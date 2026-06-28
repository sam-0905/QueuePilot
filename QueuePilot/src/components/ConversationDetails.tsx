import type { Conversation } from "../types/conversation";

interface ConversationDetailsProps {
    selectedConversation: Conversation | null;
}

function ConversationDetails({ selectedConversation }: ConversationDetailsProps) {

    if (!selectedConversation) {
        return (
        <section className="flex flex-col m-1 justify-center items-center">
            <h2 className="text-2xl font-bold mb-4">Conversation Details</h2>
            <p className="text-gray-600"> 👈 Select a conversation to view details. </p>
            <p> </p>
        </section>  
        )}

    return (
       
        <>
            <section className="flex flex-col m-2 p-4 justify-center items-center border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Conversation Details</h2>
            <h2 className="text-lg">{selectedConversation?.customerName}</h2>
            <h3 className="text-md">{selectedConversation?.priority}</h3>
            <h3 className="text-md">{selectedConversation?.status}</h3>
             <h4 className="text-sm">{selectedConversation?.waitingTime}</h4>
            <p className="text-gray-600">{selectedConversation?.escalationReason}</p>
            <p className="text-gray-600">{selectedConversation?.aiSummary}</p>

            </section>
        </>
    )
}

export default ConversationDetails;