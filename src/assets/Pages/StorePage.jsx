import Stores from "../Components/Stores";
import { Link } from "react-router-dom";

export default function StorePages() {
  return (
    <>
      <h1>Stores </h1>
      <Stores />

      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="browse">
        <button>Browse</button>
      </Link>
      <Link to="store">
        <button>Stores</button>
      </Link>
      <Link to="genre">
        <button>Genres</button>
      </Link>
      <Link to="creators">
        <button>Creators</button>
      </Link>
      <Link to="bestoftheyears">
        <button>Best game of the year</button>
      </Link>
      <Link to="newreleases">
        <button>New releases</button>
      </Link>
      <Link to="nextweekreleases">
        <button>Next week releases</button>
      </Link>
    </>
  );
}
