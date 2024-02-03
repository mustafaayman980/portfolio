import { useState, useEffect } from "react";
import "./header.css";
export default function Header() {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "dark");
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setModal(true);
        }}
        className="menu icon-menu "
      />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="##">Articles</a>
          </li>
          <li>
            <a href="#pro">projects</a>
          </li>
          <li>
            <a href="#contact">Speaking</a>
          </li>
          <li>
            <a href="#uses">Uses</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
          setMode(localStorage.getItem("mode"));
        }}
        className="mode"
      >
        {mode === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {modal && (
        <div className=" fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setModal(false);
                }}
              />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="##">Articles</a>
            </li>
            <li>
              <a href="#pro">projects</a>
            </li>
            <li>
              <a href="#contact">Speaking</a>
            </li>
            <li>
              <a href="#uses">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
