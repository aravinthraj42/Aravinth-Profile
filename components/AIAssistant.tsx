"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aiAssistantMessages, personalInfo } from "@/data/data";
import { MessageCircle, Send, Bot, X } from "lucide-react";

const MOCK_REPLIES = [
  "Scroll down to see his experience and projects!",
  "You can download his resume from the top or hero section.",
  "Reach out via the Contact section — he's open to opportunities.",
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function AIAssistant() {
  const [messages, setMessages] = useState(aiAssistantMessages);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), type: "user", text: input.trim() },
    ]);
    setInput("");
    setTimeout(() => {
      const reply =
        MOCK_REPLIES[Math.floor(Math.random() * MOCK_REPLIES.length)];
      setMessages((prev) => [
        ...prev,
        { id: String(Date.now() + 1), type: "bot", text: reply },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating button - always visible bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-gray-500/50 bg-white dark:bg-gray-700 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-gray-500/50 bg-slate-50 dark:bg-gray-600/50">
                <span className="font-medium text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary-500" />
                  AI Assistant
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="max-h-72 overflow-y-auto p-4 space-y-4 bg-white dark:bg-zinc-800">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.type === "user" ? "justify-end" : ""}`}
                  >
                    {msg.type === "bot" && (
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        msg.type === "bot"
                          ? "bg-slate-200 dark:bg-gray-600 text-slate-800 dark:text-gray-100"
                          : "bg-primary-500 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.type === "user" && <div className="w-8 shrink-0" />}
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-slate-200 dark:border-zinc-600 flex gap-2 bg-white dark:bg-zinc-800">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about this profile..."
                  className="flex-1 rounded-full px-4 py-2 text-sm bg-slate-100 dark:bg-gray-600 border border-slate-200 dark:border-gray-500 text-slate-800 dark:text-gray-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={sendMessage}
                  className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors shrink-0"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-primary-500/50"
          aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="w-7 h-7" />
        </motion.button>
      </div>
    </>
  );
}
