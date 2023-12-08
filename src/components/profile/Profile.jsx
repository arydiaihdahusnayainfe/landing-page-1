import imgProfile from "../../assets/svg/profileQu.svg";

function Profile() {
  return (
    <>
      <header id="profile" className="bg-section mt-32 py-8 px-6 rounded-3xl">
        {/* img */}
        <div>
          <img width={80} src={imgProfile} alt="PutuQ" />
        </div>
        {/* text */}
        <div className="mt-8">
          <h1 className="text-[32px] text-white cabinet-grotesk-bold leading-10">
            Arydia Ihda Husnayain is a
            <span className="text-[#FFC658]"> frontend developer</span>
            <span className="text-[#8A8B90]"> currently working at Qodr.</span>
          </h1>
        </div>
      </header>
    </>
  );
}

export default Profile;
