import { Routes, Route } from "react-router";
import Login from "@/pages/login/index.jsx";
import Register from "@/pages/register/index.jsx";

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RouterView;
