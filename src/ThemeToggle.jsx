import React from "react";
import { useGlobalContext } from "./context";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle btn" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <IoIosSunny className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
      </button>
    </section>
  );
}
