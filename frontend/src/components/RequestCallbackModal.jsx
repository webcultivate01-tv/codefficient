// src/components/RequestCallbackModal.jsx
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RequestCallbackModal({ isOpen, onClose }) {
  const nameRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      // prevent background scroll
      document.body.style.overflow = "hidden";
      // focus first input a bit after open
      setTimeout(() => nameRef.current?.focus(), 80);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = Object.fromEntries(fd.entries());

    try {
      setStatus("sending");
      // TODO: Replace this with real API call to send data to backend / Google Sheets
      console.log("Request callback payload:", payload);
      await new Promise((r) => setTimeout(r, 700)); // simulate network
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 900);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* modal content */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="rc-title"
            initial={{ y: 12, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="rc-title" className="text-lg font-semibold text-gray-900">
              Request a Callback
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Share your details — we'll call you back at the preferred time.
            </p>

            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              <input
                ref={nameRef}
                name="name"
                required
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                name="phone"
                required
                placeholder="Phone number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                name="time"
                placeholder="Preferred time (optional)"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />

              <div className="flex items-center justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md border text-sm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow"
                >
                  {status === "sending" ? "Sending..." : "Request Callback"}
                </button>
              </div>

              {status === "success" && (
                <p className="text-sm text-green-600 mt-2">Request sent — we will call you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 mt-2">Something went wrong. Try again.</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
