import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import routes from "./routes/index.jsx";
import "./assets/all.scss";
// import App from './App.jsx'
const router = createHashRouter(routes)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>
);