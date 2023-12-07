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
        </div>
      </div>
    </>
  );
}

export default App;
