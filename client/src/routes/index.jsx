import { Routes, Route } from "react-router";
import Login from "@/pages/login/index.jsx";
import Register from "@/pages/register/index.jsx";
import Dashboard from "@/pages/dashboard/index.jsx";

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RouterView;
