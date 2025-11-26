"use client";
import { useState, useEffect } from "react";

export default function CookieConsent({ onAccept }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_consent");
    if (!accepted) setVisible(true);
    else if (onAccept) onAccept(); // run tracking immediately if already accepted
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "yes");
    setVisible(false);
    if (onAccept) onAccept(); // start tracking
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg flex justify-between items-center z-50">
      <p className="text-sm">
        We use cookies to track visits and improve your experience.
      </p>

      <button
        onClick={accept}
        className="bg-yellow-400 text-black px-4 py-1 rounded"
      >
        Accept
      </button>
    </div>
  );
}
