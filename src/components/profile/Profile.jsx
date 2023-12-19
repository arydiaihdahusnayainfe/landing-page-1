import imgProfile from "../../assets/svg/profileQu.svg";

function Profile() {
  return (
    <>
      <header
        id="profile"
        className="bg-section mt-32 lg:mt-5 py-8 lg:py-12 px-6 lg:px-10 rounded-3xl lg:h-full">
        {/* img */}
        <div className="w-[80px] mobile-l:w-[100px] md:w-[120px]">
          <img src={imgProfile} alt="PutuQ" />
        </div>
        {/* text */}
        <div className="mt-8">
          <h1 className="text-[28px] mobile-l:text-[32px] md:text-[40px] lg:text-[48px] text-white cabinet-grotesk-bold leading-10 lg:leading-[64px]">
            Arydia Ihda Husnayain is a
            <span className="text-[#FFC658]"> frontend developer</span> <br />
            <span className="text-[#8A8B90]"> currently working at Qodr.</span>
          </h1>
        </div>
      </header>
    </>
  );
}

export default Profile;
