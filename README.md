# QueuePilot

# - A React + TypeScript application that simulates an AI-powered customer support inbox. The project demonstrates modern React concepts such as component-based architecture, state management, filtering, and responsive UI design.

## 📌 Features Implemented 

### ✅ Project Setup 

  - React + TypeScript + Vite 
  - Tailwind CSS - React Router DOM 
  - Organized folder structure 
  - 
  
---

## 📂 Folder Structure

src/
│
├── components/
│ ├── ConversationCard.tsx
│ ├── ConversationDetails.tsx
│ ├── ConversationList.tsx
│ └── Filters.tsx
│
├── data/
│ └── conversations.ts
│
├── pages/
│ └── Inbox.tsx
│
├── routes/
│ └── AppRoutes.tsx
│
├── types/
│ └── conversation.ts
│
├── App.tsx
└── main.tsx


---

## ✨ Implemented Features

### 📥 Inbox

- Displays all customer conversations
- Responsive two-column dashboard layout

---

### 💬 Conversation List

- Displays:
  - Customer Name
  - Status
  - Priority
  - Waiting Time
  - AI Summary
  - Escalation Reason

---

### 📄 Conversation Details

Selecting a conversation displays:

- Customer information
- Status
- Priority
- Waiting Time
- Escalation Reason
- AI Summary
- Complete conversation messages

---

### 🔍 Live Search

- Search conversations by customer name
- Case-insensitive search
- Instant filtering while typing
- Empty state when no conversations are found

### Example:
```
Search: john

Results:
✔ John Doe
```

---

### 📭 Empty State

Displays a friendly message when no conversations match the search.

Example:



🔍 No matching conversations.
Try another search.


---

## ⚛️ React Concepts Used

- Functional Components
- Props
- useState
- Conditional Rendering
- List Rendering
- Event Handling
- State Lifting
- Parent → Child Data Flow
- Child → Parent Communication
- TypeScript Interfaces

---

## 🛠 Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

---


## ▶️ Run Locally

Clone the repository

```bash
git clone <repository-url>

Navigate to the project

cd QueuePilot

Install dependencies

npm install

Start development server

npm run dev

Open

http://localhost:5173

 ```

# 🏗 Build
- npm run build

- Preview production build

- npm run preview
 
----


# 👨‍💻 Author

### Allan Sam

#### Frontend Developer | React | TypeScript