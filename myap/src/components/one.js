import { Two } from "./two";
import { useContext } from "react";
import { ColorContext } from "./ColorProvider";
import { useState } from "react";
// import { useState } from "react";
export const One = () => {
  const { color, setColor } = useContext(ColorContext);

  const [bol, setBol] = useState(false);
  const handler = () => {
    setBol(!bol);
    setColor(`${bol ? "red" : "blue"}`);
  };
  return (
    <div>
      <button onClick={() => handler()}>i am one </button>
      <Two />
    </div>
  );
};
