import { useState } from "react";
import "../SCSS/Header.scss";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <header>
      <a href="#">EVERYONE GAMES</a>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </header>
  );
}
