
export interface Conversation {
  id: string;
  customerName: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Resolved";
  messages: Message[];
  waitingTime: number;
  createdAt: Date;
  updatedAt: Date;
  satisfaction : 1|2|3|4|5;
  escalationReason: string;
  aiSummary?: string;
}

export interface Message {
  id: string;

  sender: "customer" | "agent" | "ai";

  text: string;

  timestamp: string;
}
