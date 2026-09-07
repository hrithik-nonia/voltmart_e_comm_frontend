import { Navigate } from "react-router-dom";

function getRoleFromToken() {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return null;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    // Token expired
    if (!payload.exp || payload.exp * 1000 <= Date.now()) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_data");

      return null;
    }

    return payload.role;
  } catch (error) {
    console.error("Invalid token:", error);

    localStorage.removeItem("access_token");
    localStorage.removeItem("user_data");

    return null;
  }
}

export function ProtectedRoute({ role, children }) {
  const currentRole = getRoleFromToken();

  // Login nahi hai / token invalid hai
  if (!currentRole) {
    return <Navigate to="/" replace />;
  }

  // Wrong role
  if (currentRole !== role) {
    if (currentRole === "admin") {
      return <Navigate to="/admin" replace />;
    }

    if (currentRole === "user") {
      return <Navigate to="/shop" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
}
