import "./App.css";
import { useState } from "react";

type ChatMessage = {
  role: "user" | "ai";
  content: string;
};

function App() {
  const [message, setMessage] = useState<string>("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChatLog((prev) => [...prev, { role: "user", content: message }]);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      setChatLog((prev) => [...prev, { role: "ai", content: data.reply || data.error }]);
      setMessage("");
    } catch (err) {
      console.error("Error calling backend:", err);
    }
  };

  return (
    <div className="container">
        <h1>AI Chatbot</h1>
        <div className="chat-box">
            {chatLog.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.role}`}>
                <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
            </div>
            ))}
        </div>
        <input
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
        />
        <button className="send-button" onClick={sendMessage}>
            Send
        </button>
    </div>
  );
}

export default App;