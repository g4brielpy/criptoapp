import { Link } from "react-router";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img src={Logo} alt="Logo CriptoMoeda" />
      </Link>
    </header>
  );
}
