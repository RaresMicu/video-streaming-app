import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { DocumentaryContextProvider } from "./context/documentaryContext/DocumentaryContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import { UserContextProvider } from "./context/userContext/UserContext";

import dotenv from "dotenv";
dotenv.config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DocumentaryContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ListContextProvider>
      </DocumentaryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
