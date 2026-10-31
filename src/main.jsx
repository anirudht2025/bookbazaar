import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SharedContext from "./contextAPI/SharedContext.jsx";
import AuthContext from "./contextAPI/AuthContext.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="490164505515-g782h8va2b8c1kn2cgrvp5bs57tlhmik.apps.googleusercontent.com">
      <BrowserRouter>
        <SharedContext>
          <AuthContext>
            <App />
          </AuthContext>
        </SharedContext>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
);
