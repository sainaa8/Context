// import { Three } from "./thtee";
import { useContext } from "react";
import { NameContext } from "./Mianprovider";
import { ColorContext } from "./ColorProvider";
export const Two = () => {
  const { name, setName } = useContext(NameContext);
  const { color, setColor } = useContext(ColorContext);
  const handler = () => {
    setColor("red");
  };
  console.log(color);
  return (
    <div onClick={() => handler()}>
      i am two
      <div style={{ color: color }}>{name}</div>
    </div>
  );
};
