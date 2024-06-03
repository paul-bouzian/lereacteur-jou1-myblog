import "./NavigationMenu.css";
import NavLink from "./NavigationMenu/NavLink.jsx";

const NavigationMenu = () => {
  return (
    <nav>
      <div className="nav-left-part">
        <NavLink title="Twitter" />
        <NavLink title="Facebook" />
        <NavLink title="LinkedIn" />
      </div>
      <NavLink title="Youtube" />
    </nav>
  );
};

export default NavigationMenu;
