"use client";

import { useState } from "react";

const questions = [
  { key: "name", text: "Hi! I'm the VEWZA Digital assistant. What's your name?" },
  { key: "email", text: "Great to meet you! What's the best email to reach you at?" },
  {
    key: "service",
    text: "What are you interested in?",
    options: ["Branding", "Website Development", "Mobile App", "Digital Marketing", "AI Automation", "Not sure yet"],
  },
  {
    key: "budget",
    text: "What's your approximate budget?",
    options: ["Under R5,000", "R5,000–R15,000", "R15,000–R50,000", "R50,000+", "Not sure yet"],
  },
  { key: "message", text: "Anything else you'd like us to know about your project?" },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const currentQuestion = questions[step];

  function recordAnswer(value) {
    const updated = { ...answers, [currentQuestion.key]: value };
    setAnswers(updated);
    setInputValue("");

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      submitLead(updated);
    }
  }

  async function submitLead(finalAnswers) {
    setSubmitting(true);
    try {
      await fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalAnswers),
      });
    } catch {
      // fail silently for the user, lead capture is best-effort
    }
    setSubmitting(false);
    setDone(true);
  }

  function handleTextSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    recordAnswer(inputValue.trim());
  }

  function resetChat() {
    setStep(0);
    setAnswers({});
    setInputValue("");
    setDone(false);
  }

  function closeChat() {
    setOpen(false);
    resetChat();
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white shadow-2xl transition hover:scale-105"
          style={{ background: "linear-gradient(90deg, #2563EB, #A855F7)" }}
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 left-6 z-[60] flex h-[480px] w-[340px] flex-col overflow-hidden rounded-2xl shadow-2xl" style={{ background: "#111C33", border: "1px solid rgba(255,255,255,.08)" }}>
          <div className="flex items-center justify-between px-4 py-3" style={{ background: "linear-gradient(90deg, #080B1A, #101B3D)" }}>
            <p className="text-sm font-semibold text-white">VEWZA Digital Assistant</p>
            <button onClick={closeChat} className="text-white/70 hover:text-white" aria-label="Close chat">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {done ? (
              <div className="text-center">
                <p className="text-sm text-white">Thanks, {answers.name}! 🎉</p>
                <p className="mt-2 text-sm text-[#94A3B8]">
                  We've got your details and will reach out at {answers.email} soon.
                </p>
                <button onClick={closeChat} className="mt-4 rounded-full px-4 py-2 text-xs text-white" style={{ background: "linear-gradient(90deg, #2563EB, #A855F7)" }}>
                  Close chat
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {questions.slice(0, step + 1).map((q) => (
                  <div key={q.key}>
                    <div className="max-w-[85%] rounded-xl px-3 py-2 text-sm text-white" style={{ background: "rgba(96,165,250,0.15)" }}>
                      {q.text}
                    </div>
                    {answers[q.key] && (
                      <div className="mt-2 ml-auto max-w-[85%] rounded-xl px-3 py-2 text-right text-sm text-white" style={{ background: "linear-gradient(90deg, #2563EB, #A855F7)" }}>
                        {answers[q.key]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {!done && currentQuestion && (
            <div className="border-t px-4 py-3" style={{ borderColor: "rgba(255,255,255,.08)" }}>
              {currentQuestion.options ? (
                <div className="flex flex-wrap gap-2">
                  {currentQuestion.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => recordAnswer(opt)}
                      disabled={submitting}
                      className="rounded-full px-3 py-1.5 text-xs text-white transition hover:opacity-80"
                      style={{ background: "rgba(96,165,250,0.15)", border: "1px solid rgba(255,255,255,.1)" }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <form onSubmit={handleTextSubmit} className="flex gap-2">
                  <input
                    type={currentQuestion.key === "email" ? "email" : "text"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your answer..."
                    className="flex-1 rounded-lg px-3 py-2 text-sm text-white outline-none"
                    style={{ background: "#080B1A", border: "1px solid rgba(255,255,255,.1)" }}
                  />
                  <button type="submit" disabled={submitting} className="rounded-lg px-3 py-2 text-sm text-white" style={{ background: "linear-gradient(90deg, #2563EB, #A855F7)" }}>→</button>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
