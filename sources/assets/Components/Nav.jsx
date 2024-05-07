import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/platforms">
            <button>Platforms</button>
          </Link>
        </li>
        <li>
          <Link to="/store">
            <button>Stores</button>
          </Link>
        </li>
        <li>
          <Link to="/genre">
            <button>Genres</button>
          </Link>
        </li>
        <li>
          <Link to="/creators">
            <button>Creators</button>
          </Link>
        </li>
        <li>
          <Link to="/bestoftheyears">
            <button>Best game of the year</button>
          </Link>
        </li>
        <li>
          <Link to="/newreleases">
            <button>New releases</button>
          </Link>
        </li>
        <li>
          <Link to="/nextweekreleases">
            <button>Next week releases</button>
          </Link>
        </li>
        <li>
          <Link to="/tags">
            <button>Tags</button>
          </Link>
        </li>
        <li>
          <Link to="/developers">
            <button>Developers</button>
          </Link>
        </li>
        <li>
          <Link to="/publisher">
            <button>Publisher</button>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
