"use client";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox for a welcome email. 🔥");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <>
      <style>{`
        .form { display: flex; flex-direction: column; gap: 0.7rem; }
        .input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 6px;
          color: #F5F0E8;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          padding: 0.9rem 1rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .input:focus {
          border-color: #C9A84C;
          background: rgba(255,255,255,0.07);
        }
        .input::placeholder { color: #6B6560; }
        .input:disabled { opacity: 0.6; cursor: not-allowed; }
        .btn-primary {
          border: none;
          border-radius: 6px;
          background: #C9A84C;
          color: #0A0A0A;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-size: 0.92rem;
          font-weight: 800;
          padding: 0.95rem 1rem;
          transition: transform 0.2s, background 0.2s, opacity 0.2s;
        }
        .btn-primary:hover:not(:disabled) {
          background: #E8C97A;
          transform: translateY(-2px);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .status-msg {
          font-size: 0.82rem;
          padding: 0.7rem 0.9rem;
          border-radius: 6px;
          text-align: center;
          line-height: 1.5;
        }
        .status-success {
          background: rgba(45,158,107,0.12);
          border: 1px solid rgba(45,158,107,0.3);
          color: #2D9E6B;
        }
        .status-error {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.2);
          color: #EF4444;
        }
      `}</style>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          required
        />
        <button
          className="btn-primary"
          type="submit"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Subscribing..." : status === "success" ? "You're in! 🔥" : "Join Free"}
        </button>
      </form>

      {message && (
        <div className={`status-msg ${status === "success" ? "status-success" : "status-error"}`}>
          {message}
        </div>
      )}
    </>
  );
}