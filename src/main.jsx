import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId="452344827724-1rges3jm4jid0l5a7dghklqd69v04hgv.apps.googleusercontent.com">
        <StrictMode>
            <App />
        </StrictMode>
    </GoogleOAuthProvider>
);
