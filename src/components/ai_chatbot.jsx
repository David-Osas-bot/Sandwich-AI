import React, { useState, useRef, useEffect } from "react";
import "../assets/library/flaticon/css/all.css";
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css";
import "../css/ai_chatbot.css";


const initial_bot_message = {
  id: "msg-0",
  sender: "bot",
  text: "👋 Hi! I'm the SandwichAI assistant. I can help you learn about our platform, pricing, and features. What would you like to know?",
};

const quick_replies = [
  "How does pricing work?",
  "Can I try for free?",
  "Book a demo",
];

// Teaser timing — tune these to taste
const TEASER_APPEAR_DELAY_MS = 2500;   
const TEASER_AUTO_HIDE_MS = 12000;    

function ai_chatbot() {
  const [is_open, set_is_open] = useState(false);
  const [has_unread, set_has_unread] = useState(true);
  const [messages, set_messages] = useState([initial_bot_message]);   
  const [input_value, set_input_value] = useState("");
  const [is_typing, set_is_typing] = useState(false);
  const [show_teaser, set_show_teaser] = useState(false);
  const [teaser_dismissed, set_teaser_dismissed] = useState(false);

  const messages_end_ref = useRef(null);

  useEffect(() => {
    messages_end_ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, is_typing]);

  // Teaser bubble lifecycle: appear after a delay, auto-hide after a while,
  // unless the user has already dismissed it or opened the chat.
  useEffect(() => {
    if (teaser_dismissed || is_open) return;

    const appear_timer = setTimeout(() => {
      set_show_teaser(true);
    }, TEASER_APPEAR_DELAY_MS);

    return () => clearTimeout(appear_timer);
  }, [teaser_dismissed, is_open]);

  useEffect(() => {
    if (!show_teaser) return;

    const hide_timer = setTimeout(() => {
      set_show_teaser(false);
    }, TEASER_AUTO_HIDE_MS);

    return () => clearTimeout(hide_timer);
  }, [show_teaser]);

  function dismiss_teaser(e) {
    e.stopPropagation();
    set_show_teaser(false);
    set_teaser_dismissed(true);
  }

  function open_from_teaser() {
    set_show_teaser(false);
    set_teaser_dismissed(true);
    set_is_open(true);
    set_has_unread(false);
  }

  function toggle_widget() {
    set_is_open((prev) => !prev);
    set_show_teaser(false);
    set_teaser_dismissed(true);
    if (!is_open) set_has_unread(false);
  }

  function push_user_message(text) {
    if (!text.trim()) return;

    const user_message = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: text.trim(),
    };

    set_messages((prev) => [...prev, user_message]);
    set_input_value("");

    // BACKEND: replace this block with the real API call.
    // e.g. send `text` + conversation history to the chatbot endpoint,
    // then push the response into `messages` with sender: "bot".
    set_is_typing(true);
    setTimeout(() => {
      set_is_typing(false);
      set_messages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}-bot`,
          sender: "bot",
          text: "This is a placeholder response — backend integration pending.",
        },
      ]);
    }, 1200);
  }

  function handle_quick_reply(reply) {
    push_user_message(reply);
  }

  function handle_send() {
    push_user_message(input_value);
  }

  function handle_key_down(e) {
    if (e.key === "Enter") handle_send();
  }

  return (
    <div className="chatbot-widget-root">

      {show_teaser && !is_open && (
        <div className="chatbot-teaser" onClick={open_from_teaser}>
          <button className="chatbot-teaser-close" onClick={dismiss_teaser} aria-label="Dismiss">
            <i className="fa fa-times"></i>
          </button>
          <div className="chatbot-teaser-content flex items-start gap-1">
            <span className="chatbot-teaser-emoji">👋</span>
            <div className="flex flex-col gap-1">
              <span className="chatbot-teaser-title">Hi! I'm SandwichAI</span>
              <span className="chatbot-teaser-text">Your AI assistant. How can I help you today?</span>
            </div>
          </div>
        </div>
      )}

      {is_open && (
        <div className="chatbot-panel flex flex-col" aria-label="AI chatbot widget">

          <div className="chatbot-header flex items-center justify-between">
            <div className="chatbot-header-info flex items-center gap-1">
              <div className="chatbot-avatar flex items-center justify-center">SS</div>
              <div className="flex flex-col">
                <span className="chatbot-title">SandwichAI Assistant</span>
                <span className="chatbot-status flex items-center gap-1">
                  <i className="fa fa-circle chatbot-status-dot"></i> Online now
                </span>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={toggle_widget} aria-label="Close chat">
              <i className="fa fa-times"></i>
            </button>
          </div>

          <div className="chatbot-body flex flex-col gap-1">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatbot-bubble-row ${message.sender === "user" ? "row-end" : "row-start"}`}
              >
                <div className={`chatbot-bubble ${message.sender === "user" ? "bubble-user" : "bubble-bot"}`}>
                  {message.text}
                </div>
              </div>
            ))}

            {is_typing && (
              <div className="chatbot-bubble-row row-start">
                <div className="chatbot-bubble bubble-bot chatbot-typing-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            {!is_typing && messages.length === 1 && (
              <div className="chatbot-quick-replies flex flex-col gap-1">
                {quick_replies.map((reply, index) => (
                  <button
                    key={index}
                    className="chatbot-quick-reply"
                    onClick={() => handle_quick_reply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <div ref={messages_end_ref}></div>
          </div>

          <div className="chatbot-footer flex items-center gap-1">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type a message..."
              value={input_value}
              onChange={(e) => set_input_value(e.target.value)}
              onKeyDown={handle_key_down}
            />
            <button className="chatbot-send-btn flex items-center justify-center" onClick={handle_send} aria-label="Send message">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>

        </div>
      )}

      <button
        className={`chatbot-launcher-btn flex items-center justify-center ${show_teaser ? "chatbot-launcher-pulse" : ""}`}
        onClick={toggle_widget}
        aria-label="Open chat widget"
      >
        <i className="fa fa-comment"></i>
        {has_unread && !is_open && <span className="chatbot-launcher-badge"></span>}
      </button>
    </div>
  );
}

export default ai_chatbot;