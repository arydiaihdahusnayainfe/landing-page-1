import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-section fixed top-4 right-[50%] left-[50%] transform -translate-x-[50%] flex justify-between items-center px-4 py-3 mt-4 w-[90%] rounded-[64px]">
      {/* logo */}
      <div>
        <h1 className="text-3xl text-white cabinet-grotesk-extrabold ">
          Arydia
        </h1>
      </div>
      {/* menu hamburger */}
      <div>
        {/* Menu toggle button */}
        <div className="relative" onClick={toggleMenuOpen}>
          <Hamburger
            rounded
            distance="sm"
            size={30}
            duration={0.9}
            color="white"
            toggled={menuOpen}
            toggle={toggleMenuOpen}
          />
        </div>

        {/* Menu items */}
        {menuOpen && (
          <ul className="absolute top-14 right-7 bg-section text-white rounded-xl">
            <a href="#">
              <li
                key="1"
                className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                  {" "}
                  Menu Item 1{" "}
                </p>
              </li>
            </a>
            <a href="#">
              <li
                key="2"
                className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                  {" "}
                  Menu Item 2{" "}
                </p>
              </li>
            </a>
            <a href="#">
              <li
                key="3"
                className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                  {" "}
                  Menu Item 3{" "}
                </p>
              </li>
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
