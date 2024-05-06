import Genre from "../Components/Genre";
import { Link } from "react-router-dom";

export default function GenrePage() {
  return (
    <>
      <h1>Genre</h1>
      <Genre />

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
    </>
  );
}
