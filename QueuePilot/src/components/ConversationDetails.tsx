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
           
        </>
    )
}

export default ConversationDetails;