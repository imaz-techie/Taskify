// components/RequireAuth.js
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem("login") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
