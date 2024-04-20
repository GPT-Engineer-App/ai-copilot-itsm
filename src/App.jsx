import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
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
      <Box position="fixed" bottom="4" right="4">
        <Button rightIcon={<FaRobot />} colorScheme="purple" variant="solid" />
      </Box>
    </Router>
  );
}

export default App;
