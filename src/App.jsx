import SocialMedia from "./components/Social_Media/SocialMedia";
import Company from "./components/company/Company";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Location from "./components/location/Location";
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";
import SeeMore from "./components/see_more/SeeMore";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <div className="max-w-[360px] mx-auto">
      <div className="w-[90%] mx-auto">
        <div>
            <NavBar />
        </div>
        <div className="overflow-y-scroll h-[1000vh]">
            <Profile />
            <Location />
            <Contact />
            <SocialMedia />
            <Experience />
            <Skill />
            <Company /> 
            <Project />
            <SeeMore />
        </div>
      </div>
    </div>
  );
}

export default App;
