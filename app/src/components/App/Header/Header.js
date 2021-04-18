import { Link } from "react-router-dom";
import { Routes } from "../../../core/routing/routing";
import UserLogin from "./login/UserLogin";

const navItems = [
  {
    label: "Projects",
    route: Routes.Projects,
    icon: null,
  },
  {
    label: "Clients",
    route: Routes.Clients,
    icon: null,
  },
  {
    label: "Reviews",
    route: Routes.Reviews,
    icon: null,
  },
];

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          3DprintingDev
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {navItems.map((navItems) => (
            <li key={navItems.label} className="nav-item">
              <Link className="nav-link" to={navItems.route}>
                {navItems.label}
              </Link>
            </li>
          ))}
          <UserLogin />
        </ul>
      </header>
    </>
  );
};

export default Header;
