import { Link } from "react-router-dom";
import "../SCSS/nav.scss";

export default function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="browse">
            <button>Browse</button>
          </Link>
        </li>
        <li>
          <Link to="store">
            <button>Stores</button>
          </Link>
        </li>
        <li>
          <Link to="genre">
            <button>Genres</button>
          </Link>
        </li>
        <li>
          <Link to="creators">
            <button>Creators</button>
          </Link>
        </li>
      </ol>
    </nav>
  );
}
