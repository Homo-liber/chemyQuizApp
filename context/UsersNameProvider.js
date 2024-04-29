import { UsersNameContext } from "./UsersNameContext";
import { useState } from "react";

export default function UsersNameProvider({ children }) {
  //   const [login, setLogin] = useState("Username");

  return (
    <UsersNameContext.Provider value={{ name: "Username" }}>
      {children}
    </UsersNameContext.Provider>
  );
}
