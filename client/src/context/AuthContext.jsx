import { createContext, useContext, useState } from "react";
import { loginUser, signupUser } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("smartshop_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  async function signup(formData) {
    const data = await signupUser(formData);
    localStorage.setItem("smartshop_user", JSON.stringify(data));
    setUser(data);
    return data;
  }

  async function login(formData) {
    const data = await loginUser(formData);
    localStorage.setItem("smartshop_user", JSON.stringify(data));
    setUser(data);
    return data;
  }

  function logout() {
    localStorage.removeItem("smartshop_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}