import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";

export const Navbar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <FilterVintageIcon></FilterVintageIcon>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Plantas</li>
          </Link>
          <Link to="/category/flores">
            <li>Plantas con flores</li>
          </Link>
          <Link to="/category/sinflores">
            <li>Plantas sin flores</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
