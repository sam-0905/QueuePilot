import { useState } from "react";
import ConversationList from "../components/ConversationList";
import { conversations } from "../data/conversations";
import type { Conversation } from "../types/conversation";

function Inbox() {

    const [onSelectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Inbox</h1>
            <ConversationList conversations={conversations} onSelectedConversation={setSelectedConversation} />
            <p>selected:{} {onSelectedConversation ? onSelectedConversation.customerName : "None"}</p>
        </div>
        </>
    )

}

export default Inbox;