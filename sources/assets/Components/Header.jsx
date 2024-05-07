import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/system/buttons.scss";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header>
      <div>
        <Link to="/">
          <button className="button-basic">EVERYONE GAMES</button>
        </Link>

        <form>
          <img src="./SVG/icon-search.svg" alt="" />
          <input
            type="search"
            placeholder="Search for your favorite games"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
