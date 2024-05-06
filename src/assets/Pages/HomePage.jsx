import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Games from "../Components/Games";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Games />
    </>
  );
}
