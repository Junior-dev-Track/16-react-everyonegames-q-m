import { FaPlaystation, FaWindows, FaXbox, FaApple } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

const TransformNameIntoLogo = (objet) => {
  switch (objet) {
    case "pc":
      return <FaWindows />;
    case "playstation":
      return <FaPlaystation />;
    case "xbox":
      return <FaXbox />;
    case "mac":
      return <FaApple />;
    case "nintendo":
      return <BsNintendoSwitch />;
    default:
      return null;
  }
};

export default TransformNameIntoLogo;
