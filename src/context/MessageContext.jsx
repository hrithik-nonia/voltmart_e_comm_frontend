import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import MinimalErrorCard from "../components/commonComponents/MinimalErrorCard";
import SuccessModal from "../components/commonComponents/SuccessModal";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const showError = (message) => setError(message);
  const showSuccess = (message) => setSuccess(message);

  return (
    <MessageContext.Provider value={{ error, success, showError, showSuccess }}>
      {children}

      {error &&
        createPortal(
          <ErrorBoundary fallback={<div>Error Message Component Fatta!</div>}>
            <MinimalErrorCard
              errorMessage={error} // ✅ sahi prop name
              onClose={() => showError("")}
            />
          </ErrorBoundary>,
          document.body,
        )}

      {success &&
        createPortal(
          <ErrorBoundary fallback={<div>Success Message Component Fatta!</div>}>
            <SuccessModal
              successMsg={success} // ✅ sahi prop name
              onClose={() => showSuccess("")}
            />
          </ErrorBoundary>,
          document.body,
        )}
    </MessageContext.Provider>
  );
};

// eslint-disable-next-line
export const useMessage = () => useContext(MessageContext);
