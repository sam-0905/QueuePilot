
export interface Conversation {
  id: string;
  name: string;
  participants: string[];
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  status: "Open" | "In Progress" | "Resolved";
  priority: "High" | "Medium" | "Low";

}

export interface Message {
  id: string;

  sender: "customer" | "agent" | "ai";

  text: string;

  timestamp: string;
}
