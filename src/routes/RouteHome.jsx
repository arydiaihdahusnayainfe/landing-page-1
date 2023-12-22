import SocialMedia from "../components/SocialMedia/SocialMedia";
import Company from "../components/company/Company";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Location from "../components/location/Location";
import NavBar from "../components/navbar/NavBar";
import Profile from "../components/profile/Profile";
import Project from "../components/project/Project";
import SeeMore from "../components/seeMore/SeeMore";
import Skill from "../components/skill/Skill";

function RouteHome() {
  return (
    <div>
      {/* Container */}
      <div className="w-[90%] lg:w-[85%] mx-auto">
        {/* Navigation */}
        <div>
          <NavBar />
        </div>
        {/* Main content */}
        <div className="overflow-y-scroll">
          {/* Layout */}
          <div className="lg:grid lg:grid-cols-5 lg:grid-rows-1 gap-2 lg:h-full lg:mt-32">
            {/* Hidden profile section on large screens */}
            <div className="lg:hidden">
              <Profile />
            </div>
            {/* Hidden location section on large screens */}
            <div className="lg:hidden">
              <Location />
            </div>
            {/* Main profile section */}
            <div
              id="header"
              className="hidden lg:block lg:col-span-3 lg:h-[95%]">
              <Profile />
            </div>
            {/* Main location section */}
            <div className="hidden lg:block lg:col-span-2 lg:h-[95%]">
              <Location />
            </div>
          </div>
          {/* Hidden contact section on large screens */}
          <div className="lg:hidden">
            <Contact />
          </div>
          {/* Social media */}
          <SocialMedia />
          {/* Layout */}
          <div className="lg:grid lg:grid-cols-5 lg:grid-rows-1 gap-2 lg:h-full my-auto">
            {/* Contact section */}
            <div className="hidden lg:block lg:col-span-2 lg:h-[95%]">
              <Contact />
            </div>
            {/* Experience section */}
            <div className="h-full lg:col-span-3 lg:h-[95%]">
              <Experience />
            </div>
          </div>
          {/* Skill section */}
          <Skill />
          {/* Company section */}
          <Company />
          {/* Project section */}
          <Project />
          {/* See more */}
          <SeeMore />
          {/* Contact */}
          <Contact />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RouteHome;
