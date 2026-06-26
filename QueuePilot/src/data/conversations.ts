
messages:[
{
id: "msg1",
sender: "customer",
text: "Hello, I need help with my order.",
timestamp: "2023-06-01T10:00:00Z",
waitingTime: 0,
escalationReason: null,
},

{
id: "msg2",
sender: "agent",
text: "Sure, I can help you with that. Can you provide your order number?",
timestamp: "2023-06-01T10:01:00Z",
waitingTime: 60,
escalationReason: null,
},

{
id: "msg3",
sender: "customer",
text: "Yes, my order number is 12345.", 
timestamp: "2023-06-01T10:02:00Z",
waitingTime: 60,
escalationReason: null,
},

{   
id: "msg4",
sender: "agent",
text: "Thank you. I see that your order is delayed. I will escalate this issue to our support team.",   
timestamp: "2023-06-01T10:03:00Z",
waitingTime: 60,
escalationReason: "Order delay",
},

];