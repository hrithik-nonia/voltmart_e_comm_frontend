import { Navigate } from "react-router-dom";

function getRoleFromToken() {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return null;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

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

export default function RoleRedirect() {
  const role = getRoleFromToken();

  if (role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return <Navigate to="/shop" replace />;
}
