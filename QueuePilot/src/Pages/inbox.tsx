import ConversationList from "../components/ConversationList";
import { conversations } from "../data/conversations";

function Inbox() {
    return (
        <>
        <div>
            <h1>Inbox</h1>
            <ConversationList conversations={conversations} />
        </div>
        </>
    )

}

export default Inbox;