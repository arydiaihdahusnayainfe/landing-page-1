import Qodr from "../../assets/svg/Qodr.svg";
import Kewebsite from "../../assets/svg/Kewebsite.svg";

/**
 * Renders the company section.
 * @returns {JSX.Element} The rendered company section.
 */
function Company() {
  return (
    <>
      {/* Company section */}
      <section
        id="company"
        className="bg-section mt-2 py-8 px-6 rounded-3xl text-white w-full overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 w-[450px] mx-auto">
          {/* Company logo */}
          <div className="bg-[#222222] py-3 px-4 border-[1.5px] border-[#434343]">
            <img src={Qodr} alt="" />
          </div>
          {/* Website logo */}
          <div className="bg-[#222222] py-3 px-4 border-[1.5px] border-[#434343]">
            <img src={Kewebsite} alt="" />
          </div>
          {/* Company logo */}
          <div className="bg-[#222222] py-3 px-4 border-[1.5px] border-[#434343]">
            <img src={Qodr} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
