import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { generateSystemInstruction } from "../../../data/Realdata/aiData";
import { useLanguage } from "../../context/language-context";

import "./about.css";

const About = () => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: t.about.assistantGreeting,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const historyRef = useRef([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length !== 1 || prev[0].role !== "assistant") {
        return prev;
      }

      return [{ role: "assistant", content: t.about.assistantGreeting }];
    });
  }, [t.about.assistantGreeting]);

  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isChatOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const API_KEY = import.meta.env.VITE_APP_GEMINI_API_KEY;

      if (!API_KEY) {
        throw new Error("API key is missing");
      }

      const ai = new GoogleGenAI({ apiKey: API_KEY });

      historyRef.current.push({
        role: "user",
        parts: [{ text: userMessage }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: historyRef.current,
        config: {
          systemInstruction: generateSystemInstruction(language),
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 200,
        },
      });

      const aiResponse = response.text;

      historyRef.current.push({
        role: "model",
        parts: [{ text: aiResponse }],
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);

      let errorMessage = t.about.errorPrefix;

      if (
        error.message?.includes("API key") ||
        error.message?.includes("API_KEY")
      ) {
        errorMessage += t.about.apiKeyError;
      } else if (
        error.message?.includes("404") ||
        error.message?.includes("not found")
      ) {
        errorMessage += t.about.modelError;
      } else {
        errorMessage += t.about.genericError;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="about" className="about-section">
        <div className="about-intro">
          <h1>{t.about.title}</h1>
          <p>{t.about.intro}</p>
          <button
            className="chat-trigger-btn"
            onClick={() => setIsChatOpen(true)}
          >
            {t.about.startChat}
            <span className="btn-icon">💬</span>
          </button>
        </div>
      </section>

      {isChatOpen && (
        <>
          <div className="chat-backdrop" onClick={() => setIsChatOpen(false)} />
          <div className="chatbot-modal">
            <div className="chatbot-container">
              <div className="chatbot-header">
                <div className="header-left">
                  <div className="avatar">RY</div>
                  <div className="header-text">
                    <h3>{t.about.assistantName}</h3>
                    <span className="status-text">{t.about.online}</span>
                  </div>
                </div>
                <button
                  className="close-chat-btn"
                  onClick={() => setIsChatOpen(false)}
                >
                  ×
                </button>
              </div>

              <div className="chatbot-messages">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.role}`}>
                    <div className="message-content">
                      {message.role === "assistant" && (
                        <div className="message-avatar">
                          <span>🤖</span>
                        </div>
                      )}
                      <div className="message-bubble">
                        <p>{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="message assistant">
                    <div className="message-content">
                      <div className="message-avatar">
                        <span>🤖</span>
                      </div>
                      <div className="message-bubble">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form className="chatbot-input" onSubmit={sendMessage}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.about.askPlaceholder}
                  disabled={isLoading}
                />
                <button type="submit" disabled={isLoading || !input.trim()}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
