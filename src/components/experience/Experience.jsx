import experienceIcon from "../../assets/svg/Experience.svg";

function Experience() {
  return (
    <>
      {/* Background section */}
      <section id="experience" className="bg-section mt-2 py-8 px-6 rounded-3xl text-white ">
        {/* Experience icon */}
        <div>
          <img className="md:w-[80px]" src={experienceIcon} alt="" />
        </div>
        {/* Experience details */}
        <div className="mt-8">
          <p className="text-[32px] md:text-[50px] cabinet-grotesk-bold leading-10 md:leading-[60px]">
            1 year of web development {/* Additional information */}
            <span className="text-[#8A8B90]">
              hopping from one deadline to another
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Experience;
