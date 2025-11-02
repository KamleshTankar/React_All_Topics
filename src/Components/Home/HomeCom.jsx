import React from "react";
import { useState, useCallback } from "react";
import reactLogo from "../../logo.svg";

const HomeCom = () => {
  const [count, setCount] = useState(0);

    const Increment = useCallback(() => {
      setCount((c) => c + 1);
    }, []);
  
    const Decrement = useCallback(() => {
      setCount((c) => c - 1);
    }, []);
  
  const Page = 0;

  return (
    <>
      <div className="home-log">
        <a href="https://react.dev" target="blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="home-log1">Vite + React</h1>
      <h2 data-testid="count-state" className="count home-log1">
        count is {count}
      </h2>
      <div className="card home-log1">
        <button
          data-testid="plus-button"
          className="plus-btn"
          onClick={Increment}
        >
          + count
        </button>

        <button
          data-testid="minus-button"
          disabled={count === Page}
          className="minus-btn"
          onClick={Decrement}
        >
          - count
        </button>
      </div>
    </>
  );
};

export default HomeCom;
