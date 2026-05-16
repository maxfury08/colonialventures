import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function MainLayout() {
  return (
    <div
      className="
      bg-black
      text-white
      overflow-x-hidden
      min-h-screen
      flex
      flex-col
      "
    >
      {/* NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <main className="flex-1">
        <Outlet />
      </main>

      {/* FLOATING WHATSAPP */}

      <FloatingWhatsApp />

      {/* FOOTER */}

      <Footer />
    </div>
  );
}