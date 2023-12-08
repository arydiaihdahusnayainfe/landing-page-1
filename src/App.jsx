import SocialMedia from "./components/Social_Media/SocialMedia";
import Contact from "./components/contact/Contact";
import Location from "./components/location/Location";
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div>
            <NavBar />
        </div>
        <div className="overflow-y-scroll h-[1000vh]" >
            <Profile />
            <Location />
            <Contact />
            <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default App;
