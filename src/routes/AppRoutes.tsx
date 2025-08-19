import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import FilesUpload from "../pages/FilesUpload";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/user-dashboard" element={<UserDashboard />} />
    <Route path="/file-upload" element={<FilesUpload />} />
  </Routes>
);
