import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BackgroundNoise from "./components/BackgroundNoise";
import CursorGlow from "./components/CursorGlow";
import LoaderScreen from "./components/LoaderScreen";


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
        <BackgroundNoise />
        <CursorGlow />
        {/* ROUTES */}

        <AppRoutes />

        {/* FLOATING WHATSAPP */}

        <FloatingWhatsApp />

        {/* FOOTER */}

        <BackgroundNoise />
      </div>
    </Router>
  );
}

export default App;