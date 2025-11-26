"use client";

import { useState, useEffect } from "react";

type CookieConsentProps = {
  onAccept?: () => void; // OPTIONAL — fixes your TS error
};

export default function CookieConsent({ onAccept }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_consent");

    if (!accepted) {
      setVisible(true);
    } else {
      onAccept?.(); // run tracking immediately if already accepted
    }
  }, [onAccept]);

  const accept = () => {
    localStorage.setItem("cookie_consent", "yes");
    setVisible(false);
    onAccept?.(); // start tracking
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 
        bg-gray-900 text-white 
        p-4 shadow-lg 
        flex flex-col sm:flex-row justify-between items-center gap-3
        animate-slide-up
        z-50
      "
    >
      <p className="text-sm text-center sm:text-left">
        We use cookies to improve your experience and track usage.
      </p>

      <button
        onClick={accept}
        className="
          bg-yellow-400 text-black 
          px-5 py-2 rounded font-semibold 
          hover:bg-yellow-300 transition
        "
      >
        Accept
      </button>
    </div>
  );
}
