import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";


function App() {
  return (
    <Router>
      <div
        className="
        bg-black
        text-white
        overflow-x-hidden
        "
      >
        {/* NAVBAR */}

        <Navbar />

        {/* ROUTES */}

        <AppRoutes />

        {/* FLOATING WHATSAPP */}

        <FloatingWhatsApp />

        {/* FOOTER */}

    
      </div>
    </Router>
  );
}

export default App;