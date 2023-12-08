import SocialMedia from "./components/Social_Media/SocialMedia";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Location from "./components/location/Location";
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/Profile";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <>
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
        </div>
      </div>
    </>
  );
}

export default App;
