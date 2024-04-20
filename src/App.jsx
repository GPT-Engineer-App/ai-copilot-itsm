import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AssetManagement from "./pages/AssetManagement.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<AssetManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
