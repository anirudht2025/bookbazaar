import "./App.css";
import { Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";

// User
import Books from "./User/pages/Books";
import BookDetails from "./User/pages/BookDetails";
import Contact from "./User/pages/Contact";
import Profile from "./User/pages/Profile";

// Admin
import Dashboard from "./Admin/pages/Dashboard";
import Resources from "./Admin/pages/Resources";
import Settings from "./Admin/pages/Settings";

// Page Not Found
import Pnf from "./pages/Pnf";

function App() {
  return (
    <Routes>
      {/* Common */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />

      {/* User */}
      <Route path="/books" element={<Books />} />
      <Route path="/books/:bid" element={<BookDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/resources" element={<Resources />} />
      <Route path="/admin/settings" element={<Settings />} />

      {/* 404 */}
      <Route path="*" element={<Pnf />} />
    </Routes>
  );
}

export default App;