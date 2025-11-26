import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maa Tara Auto Electric",
  description: "Exide Sub-Dealer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // <-- REQUIRED FIX
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Cookie Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
