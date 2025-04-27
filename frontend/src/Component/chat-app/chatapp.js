import { useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
    { text: "Hi! I need some info.", sender: "user" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;   
    console.log("123")
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Got it!", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs p-2 rounded-lg text-white ${
              msg.sender === "user" ? "bg-blue-500 self-end ml-auto" : "bg-gray-700 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border border-gray-300"
        />
        <button
          onClick={()=>handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
