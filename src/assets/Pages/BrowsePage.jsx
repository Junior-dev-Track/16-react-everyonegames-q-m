import Platforms from "../Components/Platforms";
import { Link } from "react-router-dom";

export default function Browse() {
  return (
    <>
      <h1>Browse </h1>
      <Platforms />

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
    </>
  );
}
