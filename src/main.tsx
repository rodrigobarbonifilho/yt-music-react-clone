import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes.tsx";
import { GlobalCSS } from "./global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalCSS />
    <RouterProvider router={router} />
  </React.StrictMode>
);
