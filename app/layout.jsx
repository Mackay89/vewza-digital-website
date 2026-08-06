// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ChatWidget from "./components/ChatWidget";

export const metadata = {
  title: "VEWZA Digital — Building Brands. Driving Growth.",
  description: "A full-service digital marketing and branding agency in Gauteng, South Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <Footer />
        <FloatingCTA />
        <ChatWidget />
      </body>
    </html>
  );
}
