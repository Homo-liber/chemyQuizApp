import { CorrectlyContext } from "./CorrectlyContext";
import { useState } from "react";

export default function CorrectlyProvider({ children }) {
  const [correctly, setCorrectly] = useState(0);

  function updateCorrectly(correctly) {
    setCorrectly(correctly + 1);
  }

  return (
    <CorrectlyContext.Provider
      value={{ trueAnswers: correctly, updateCorrectly }}
    >
      {children}
    </CorrectlyContext.Provider>
  );
}
