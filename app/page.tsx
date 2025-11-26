"use client";

import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

export default function Home() {
  const phone = "9830170437";
  const whatsappLink = `https://wa.me/91${phone}`;
  const mapsLink = "https://share.google/gqIPB5u3cBqGe24cy";

  const [darkMode, setDarkMode] = useState(false);
  const [qrImage, setQrImage] = useState("");

  const toggleDark = () => setDarkMode((prev) => !prev);

  // Generate QR Code
  useEffect(() => {
    QRCode.toDataURL(mapsLink).then(setQrImage);
  }, []);

  // -------------------------
  // FORM HANDLING
  // -------------------------
  interface FormState {
    name: string;
    phone: string;
    vehicle: string;
    address: string;
  }

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    vehicle: "",
    address: "",
  });

  // FIXED TYPE ERROR: Add proper TypeScript event type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);

    // Reset form after success
    setForm({
      name: "",
      phone: "",
      vehicle: "",
      address: "",
    });
  };

  // -----------------------------------------------------------
  // UI BELOW (no changes except fixing some alt text warnings)
  // -----------------------------------------------------------

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-all duration-300">
        {/* NAVBAR */}
        <nav className="bg-red-700 dark:bg-red-800 text-white py-4 shadow-lg backdrop-blur border-b border-red-900/20">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/exide-logo.png"
                alt="Exide Logo"
                className="w-10 h-10 rounded bg-white p-1 shadow"
              />
              <h1 className="text-xl font-extrabold tracking-wide">
                Maa Tara Auto Electric
              </h1>
            </div>

            {/* Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#photos" className="hover:text-yellow-300">
                Photos
              </a>
              <a href="#products" className="hover:text-yellow-300">
                Products
              </a>
              <a href="#reviews" className="hover:text-yellow-300">
                Reviews
              </a>
              <a href="#contact" className="hover:text-yellow-300">
                Contact
              </a>

              <button
                onClick={toggleDark}
                className="bg-black/20 px-3 py-1 rounded text-sm"
              >
                {darkMode ? "🌞 Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="py-16 text-center bg-gradient-to-r from-red-700 to-red-600 text-white shadow-lg">
          <h2 className="text-4xl font-extrabold mb-4 drop-shadow">
            Welcome to Maa Tara Auto Electric
          </h2>
          <p className="opacity-90 text-lg max-w-2xl mx-auto leading-relaxed">
            Your trusted Exide Sub-Dealer for car, bike & inverter batteries —
            genuine warranty, fast service, and doorstep installation.
          </p>
          <a
            href={`tel:${phone}`}
            className="mt-8 inline-block bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition"
          >
            📞 Call Now
          </a>
        </section>

        {/* PHOTOS */}
        <section id="photos" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8">Shop Photos</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {["shop1.jpg", "shop2.jpg", "battery1.jpg"].map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300"
                >
                  <img
                    src={`/${item}`}
                    alt={`Shop Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOK FORM */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-xl">
            <h3 className="text-3xl font-bold mb-6">Book Battery Installation</h3>

            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4"
            >
              <input
                className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <input
                className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700"
                placeholder="Vehicle Type"
                value={form.vehicle}
                onChange={(e) =>
                  setForm({ ...form, vehicle: e.target.value })
                }
              />

              <textarea
                className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700"
                placeholder="Your Address"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              ></textarea>

              <button
                type="submit"
                className="bg-red-700 text-white py-3 rounded-lg w-full hover:bg-red-800"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>

        {/* CONTACT + QR */}
        <section
          id="contact"
          className="py-16 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 max-w-xl">
            <h3 className="text-3xl font-bold mb-6">Contact Details</h3>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow flex flex-col gap-4">
              <p>
                <strong>Owner:</strong> Maa Tara Auto Electric
              </p>

              <p>
                <strong>Phone: </strong>
                <a href={`tel:${phone}`} className="text-red-600">
                  {phone}
                </a>
              </p>

              <p>
                <strong>Google Maps:</strong>{" "}
                <a
                  href={mapsLink}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Location
                </a>
              </p>

              <div className="text-center mt-4">
                <p className="font-semibold mb-2">Scan to Open Location</p>
                {qrImage ? (
                  <img
                    src={qrImage}
                    alt="QR Code"
                    className="mx-auto w-40"
                  />
                ) : (
                  <div className="w-40 h-40 mx-auto bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Maa Tara Auto Electric — All Rights
          Reserved
        </footer>

        {/* WHATSAPP FLOATING BUTTON */}
        <a
          href={whatsappLink}
          target="_blank"
          className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-full shadow-xl text-lg font-medium"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
