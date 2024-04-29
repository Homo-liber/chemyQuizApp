import { UsersNameContext } from "./UsersNameContext";
import { useState } from "react";

export default function UsersNameProvider({ children }) {
  const [login, setLogin] = useState("Username");

  function updateUsername(newUsername) {
    setLogin(newUsername);
  }

  return (
    <UsersNameContext.Provider value={{ name: login, updateUsername }}>
      {children}
    </UsersNameContext.Provider>
  );
}
