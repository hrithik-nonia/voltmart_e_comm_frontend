export const IsTokenValid = () => {
  const token = localStorage.getItem("access_token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_data");
      return null;
    }

    return token;
  } catch {
    localStorage.removeItem("access_token");
    return null;
  }
};