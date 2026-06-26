
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

