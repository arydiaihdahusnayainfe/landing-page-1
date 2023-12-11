import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="shadow-[0_5px_50px_0_#262626] bg-section fixed top-4 right-[50%] left-[50%] transform -translate-x-[50%] flex justify-between items-center px-4 py-3 mt-4 w-[90%] rounded-[64px] z-10">
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
          <ul className="absolute top-14 right-7 bg-[#1f2022] text-white rounded-xl">
            <a href="#profile">
              <li className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                  Profile
                </p>
              </li>
            </a>
            <a href="#location">
              <li className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                  Location
                </p>
              </li>
            </a>
            <a href="#contact">
              <li className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                  Contact
                </p>
              </li>
            </a>
            <a href="#social-media">
              <li className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                Social Media
                </p>
              </li>
            </a>
            <a href="#experience">
              <li className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                Experience
                </p>
              </li>
            </a>
            <a href="#skill">
              <li className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                Skill
                </p>
              </li>
            </a>
            <a href="#company">
              <li className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                Company
                </p>
              </li>
            </a>
            <a href="#project">
              <li className="group py-2 px-5 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium ">
                Project
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
