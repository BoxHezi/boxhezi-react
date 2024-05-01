import "./styles/Header.css"

import { useState, useEffect } from "react";

import Commands from "../components/Commands"

function Header() {
  const LIMIT = 10;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < LIMIT) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 1000)

    return () => {
      clearInterval(intervalId);
    }
  });

  return (
    <div className="header">
      <p className="name">BoxHezi</p>
      {/* <span className="command">Test</span>
      <span>{ count }</span> */}
      <Commands />
    </div>
  )
}

export default Header;