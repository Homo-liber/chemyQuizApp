import { CorrectlyContext } from "./CorrectlyContext";
import { useState } from "react";

export default function CorrectlyProvider({ children }) {
  const [correctly, setCorrectly] = useState(0);

  function updateCorrectly() {
    setCorrectly((tofu) => {
      return tofu + 1;
    });
    console.log(correctly);
  }

  return (
    <CorrectlyContext.Provider
      value={{ trueAnswers: correctly, updateCorrectly }}
    >
      {children}
    </CorrectlyContext.Provider>
  );
}
