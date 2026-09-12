import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apolloClient.js";
import "./index.css";
import App from "./App.jsx";
import { MessageProvider } from "./context/MessageContext.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import { AppDataProvider } from "./context/FetchAppDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MessageProvider>
      <ApolloProvider client={client}>
        <AppProvider>
          <AppDataProvider>
            <App />
          </AppDataProvider>
        </AppProvider>
      </ApolloProvider>
    </MessageProvider>
  </StrictMode>,
);
