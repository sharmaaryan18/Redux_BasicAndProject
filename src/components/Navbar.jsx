import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-200">
      <div className="flex flex-row justify-between ">
        <NavLink to="/">
          <div>
            <img src="../logo.png" alt="logopic" className="h-14"/>
          </div>
        </NavLink>

        <div>
          <NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
