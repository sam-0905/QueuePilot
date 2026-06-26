export const conversations: Conversation[] = [
{
id: "1",
customerName: "John Doe",
priority: "High",
status: "Open",
waitingTime: 5,
escalationReason: "Customer has been waiting for more than 5 minutes",
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
status: "Open",
waitingTime: 3,
escalationReason: "Customer has been waiting for more than 3 minutes",
messages: [
{
id: "2",        
sender: "customer",
text: "Hi, I have a question about my shipment.",
timestamp: "2023-06-01T10:05:00Z"
}
]

}]