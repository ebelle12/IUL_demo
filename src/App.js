import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Import your pages
import Agents from "./Pages/Agents";
import Clients from "./Pages/Clients";
import FinancialLiteracy from "./Pages/FinancialLiteracy";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8">
        <Routes>
          <Route path="/" element={<h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/financial-literacy" element={<FinancialLiteracy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;



