"use client";
import { useState, useEffect } from "react";
import QRCode from "qrcode";

export default function Home() {
  const phone = "9830170437";
  const whatsappLink = `https://wa.me/91${phone}`;
  const mapsLink = "https://share.google/gqIPB5u3cBqGe24cy";

  const [darkMode, setDarkMode] = useState(false);
  const [qrImage, setQrImage] = useState("");

  const toggleDark = () => setDarkMode(!darkMode);

  useEffect(() => {
    QRCode.toDataURL(mapsLink).then(setQrImage);
  }, []);

  const [form, setForm] = useState({
  name: "",
  phone: "",
  vehicle: "",
  address: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  alert(data.message);
};


  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-all duration-300">
        {/* Navbar */}
        <nav className="bg-red-700 dark:bg-red-800 text-white py-4 shadow-lg backdrop-blur border-b border-red-900/20">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo + Shop Name */}
            <div className="flex items-center gap-3">
              <img
                src="/exide-logo.png"
                alt="logo"
                className="w-10 h-10 rounded bg-white p-1 shadow"
              />
              <h1 className="text-xl font-extrabold tracking-wide">
                Maa Tara Auto Electric
              </h1>
            </div>

            {/* Buttons */}
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

        {/* HERO SECTION */}
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
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6">Available Products</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Car Batteries */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition">
                <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">
                  Car Batteries
                </h4>
                <p className="text-sm opacity-80 mb-3">
                  Exide Mileage | Exide Matrix
                </p>
                <a className="text-blue-600 hover:underline">View Models →</a>
              </div>

              {/* Bike Batteries */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition">
                <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">
                  Bike Batteries
                </h4>
                <p className="text-sm opacity-80 mb-3">
                  Exide Xplore | Exide Bikerz
                </p>
                <a className="text-blue-600 hover:underline">View Models →</a>
              </div>

              {/* Inverter Batteries */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition">
                <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">
                  Inverter Batteries
                </h4>
                <p className="text-sm opacity-80 mb-3">150Ah | 180Ah | 220Ah</p>
                <a className="text-blue-600 hover:underline">View Models →</a>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK INSTALLATION FORM */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-xl">
            <h3 className="text-3xl font-bold mb-6">
              Book Battery Installation
            </h3>

            <form className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
              <input
                className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
              />
              <input
                className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone Number"
              />
              <input
                className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700"
                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                placeholder="Vehicle Type"
              />
              <textarea
                className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700"
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Your Address"
              ></textarea>

              <button onClick={handleSubmit}
              className="bg-red-700 text-white py-3 rounded-lg w-full hover:bg-red-800">
                Submit Request
              </button>
            </form>
          </div>
        </section>

        {/* CONTACT + QR */}
        <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-xl">
            <h3 className="text-3xl font-bold mb-6">Contact Details</h3>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow flex flex-col gap-4">
              <p>
                <strong>Owner:</strong> Maa Tara Auto Electric
              </p>
              <p>
                <strong>Phone: </strong>{" "}
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

              {/* QR Code */}
              <div className="text-center mt-4">
                <p className="font-semibold mb-2">Scan to Open Location</p>
                {qrImage ? (
                  <img src={qrImage} alt="QR Code" className="mx-auto w-40" />
                ) : (
                  <div className="w-40 h-40 mx-auto bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Maa Tara Auto Electric — All Rights
          Reserved
        </footer>

        {/* Floating WhatsApp */}
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
