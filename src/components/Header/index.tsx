import { Link } from "react-router";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className="container flex items-center justify-center h-32">
      <Link to={"/"}>
        <img src={Logo} alt="Logo CriptoMoeda" />
      </Link>
    </header>
  );
}
