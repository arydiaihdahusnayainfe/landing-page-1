import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="shadow-[0_5px_50px_0_#262626] bg-section fixed top-4 right-[50%] left-[50%] transform -translate-x-[50%] flex justify-between items-center px-4 md:px-8 py-3 mt-4 w-[90%] lg:w-[85%] rounded-[64px] z-10">
      {/* logo */}
      <div>
        <h1 className="text-3xl md:text-4xl text-white cabinet-grotesk-extrabold ">
          Arydia
        </h1>
      </div>
      <div className="hidden lg:flex gap-5">
        <a href="#header">
          <p className="text-white cabinet-grotesk-extrabold text-[20px] hover:text-stone-400">
            About me
          </p>
        </a>
        <a href="#project">
          <p className="text-white cabinet-grotesk-extrabold text-[20px] hover:text-stone-400">
            Portfolio
          </p>
        </a>
      </div>

      {/* button contact */}
      <div className="hidden lg:block">
        <a
          href="https://t.me/learn_brain"
          target="_blank"
          rel="noreferrer noopener">
          <button
            className="text-[18px] text-white py-2 px-4 cabinet-grotesk-extrabold b-gradiant border-b-2 border-l-[1px] border-r-[1px] shadow-[0_3px_12px_0_#F3568F] w-full rounded-[64px]"
            type="button">
            Let’s talk
          </button>
        </a>
      </div>

      {/* menu hamburger */}
      <div className="lg:hidden">
        {/* Menu toggle button */}
        <div className="relative md:hidden" onClick={toggleMenuOpen}>
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
        {/* Menu toggle button */}
        <div className="relative hidden md:block" onClick={toggleMenuOpen}>
          <Hamburger
            rounded
            distance="sm"
            size={40}
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
              <li className="group py-2 px-5 md:py-4 md:px-10 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium md:text-[25px]">
                  Profile
                </p>
              </li>
            </a>
            <a href="#location">
              <li className="group py-2 px-5 md:py-4 md:px-10 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium md:text-[25px]">
                  Location
                </p>
              </li>
            </a>
            <a href="#contact">
              <li className="group py-2 px-5 md:py-4 md:px-10 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium md:text-[25px]">
                  Contact
                </p>
              </li>
            </a>
            <a href="#social-media">
              <li className="group py-2 px-5 md:py-4 md:px-10 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium md:text-[25px]">
                  Social Media
                </p>
              </li>
            </a>
            <a href="#experience">
              <li className="group py-2 px-5 md:py-4 md:px-10 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium md:text-[25px]">
                  Experience
                </p>
              </li>
            </a>
            <a href="#skill">
              <li className="group py-2 px-5 md:py-4 md:px-10 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium md:text-[25px]">
                  Skill
                </p>
              </li>
            </a>
            <a href="#company">
              <li className="group py-2 px-5 md:py-4 md:px-10 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium md:text-[25px]">
                  Company
                </p>
              </li>
            </a>
            <a href="#project">
              <li className="group py-2 px-5 md:py-4 md:px-10 hover:bg-slate-700 rounded-xl">
                <p className="group-hover:translate-x-2 transition-all cabinet-grotesk-medium md:text-[25px]">
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
