"use client";

import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent: " + message);
    setMessage("");
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <textarea
          className="w-full border p-2 rounded"
          rows={4}
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </main>
  );
}
