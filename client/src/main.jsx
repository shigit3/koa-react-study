// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "@/App.jsx";
import "@/index.css";
import "@arco-design/web-react/dist/css/arco.css";
import "@arco-design/web-react/es/_util/react-19-adapter";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>
);
