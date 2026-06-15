import { BrowserRouter, Route, Routes } from "react-router-dom";

import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;