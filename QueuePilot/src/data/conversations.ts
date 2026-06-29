import type { Conversation } from "../types/conversation";

export const conversations: Conversation[] = [
{
id: "1",
customerName: "John Doe",
priority: "High",
status: "Open",
waitingTime: 5,
escalationReason: "Customer has been waiting for more than 5 minutes",
aiSummary: "Customer is frustrated and needs immediate assistance.",
createdAt: new Date("2023-06-01T10:00:00Z"),
updatedAt: new Date("2023-06-01T10:05:00Z"),
satisfaction: 2,
messages: [
{
id: "1",    
sender: "customer",
text: "Hello, I need help with my order.",
timestamp: "2023-06-01T10:00:00Z"
}
]
},

{
id: "2",
customerName: "Jane Smith",
priority: "Medium",
status: "Resolved",
waitingTime: 3,
escalationReason: "Customer has been waiting for more than 3 minutes",
aiSummary: "Customer is asking about shipment status.",
createdAt: new Date("2023-06-01T10:02:00Z"),
updatedAt: new Date("2023-06-01T10:05:00Z"),
satisfaction: 3,
messages: [
{
id: "2",        
sender: "customer",
text: "Hi, I have a question about my shipment.",
timestamp: "2023-06-01T10:05:00Z"
}
]
},

{
id: "3",
customerName: "Bob Johnson",
priority: "Low",
status: "Open",
waitingTime: 1,
escalationReason: "Customer has been waiting for more than 1 minute",
aiSummary: "Customer is having issues with their account.",
createdAt: new Date("2023-06-01T10:05:00Z"),
updatedAt: new Date("2023-06-01T10:10:00Z"),
satisfaction: 4,
messages: [
{
id: "3",        
sender: "customer",
text: "Hello, I need help with my account.",
timestamp: "2023-06-01T10:10:00Z"
}
]
}
]