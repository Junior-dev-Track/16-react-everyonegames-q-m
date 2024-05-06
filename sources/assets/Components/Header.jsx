import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <header>
      <div>
        <Link to="/">
          <button>EVERYONE GAMES</button>
        </Link>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </header>
  );
};

export default Header;
