import "./globals.css";
import CookieConsent from "../components/CookieConsent";

export const metadata = {
  title: "Maa Tara Auto Electric",
  description: "Exide Sub-Dealer",
};

export default function RootLayout({ children }) {
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
