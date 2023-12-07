import imgProfile from "../../assets/svg/profileQu.svg";

function Profile() {
  return (
    <>
      <div className="bg-section mt-32 py-8 px-6 rounded-3xl">
        <div>
          <img width={80} src={imgProfile} alt="PutuQ" />
        </div>
        <div className="mt-8">
          <h1 className="text-[32px] text-white cabinet-grotesk-bold">
            Arydia Ihda Husnayain is a
            <span className="text-[#FFC658]"> frontend developer</span>
            <span className="text-[#8A8B90]"> currently working at Qodr.</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Profile;
