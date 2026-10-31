import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const authContext = createContext();

function AuthContext({ children }) {
  const [authUser, setAuthUser] = useState("false");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      setAuthUser("True");
      setRole(JSON.parse(sessionStorage.getItem("user")).role);
    }
  }, []);

  return (
    <>
      <authContext.Provider value={{ authUser, setAuthUser, role, setRole }}>
        {children}
      </authContext.Provider>
    </>
  );
}

export default AuthContext;
