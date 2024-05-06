import { useState } from "react";
import "../Styles/header.scss";

const Header = () => {
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
};

export default Header;
