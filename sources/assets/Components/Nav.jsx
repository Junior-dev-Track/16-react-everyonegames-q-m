import { Link } from "react-router-dom";
import "../Styles/system/buttons.scss";

const Nav = () => {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/">
            <button className="button-basic">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/platforms">
            <button className="button-basic">Platforms</button>
          </Link>
        </li>
        <li>
          <Link to="/store">
            <button className="button-basic">Stores</button>
          </Link>
        </li>
        <li>
          <Link to="/genre">
            <button className="button-basic">Genres</button>
          </Link>
        </li>
        <li>
          <Link to="/creators">
            <button className="button-basic">Creators</button>
          </Link>
        </li>
        <li>
          <Link to="/bestoftheyears">
            <button className="button-basic">Best game of the year</button>
          </Link>
        </li>
        <li>
          <Link to="/newreleases">
            <button className="button-basic">New releases</button>
          </Link>
        </li>
        <li>
          <Link to="/nextweekreleases">
            <button className="button-basic">Next week releases</button>
          </Link>
        </li>
        <li>
          <Link to="/tags">
            <button className="button-basic">Tags</button>
          </Link>
        </li>
        <li>
          <Link to="/developers">
            <button className="button-basic">Developers</button>
          </Link>
        </li>
        <li>
          <Link to="/publisher">
            <button className="button-basic">Publisher</button>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
