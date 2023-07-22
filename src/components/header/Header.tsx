import Logo from "./Logo";
import Filter from "./filters/Filter";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Filter />
    </div>
  );
}
