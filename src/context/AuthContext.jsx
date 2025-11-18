// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
    email: localStorage.getItem("email")
  });

  useEffect(() => {
    // Sync localStorage when auth changes
    if (auth.token) {
      localStorage.setItem("token", auth.token);
      localStorage.setItem("role", auth.role);
      localStorage.setItem("email", auth.email);
    } else {
      localStorage.clear();
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
