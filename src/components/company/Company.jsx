import Qodr from "../../assets/svg/Qodr.svg";
import Kewebsite from "../../assets/svg/Kewebsite.svg";

function Company() {
  return (
    <>
      {/* Company section */}
      <section
        id="company"
        className="bg-section mt-2 lg:mt-5 lg:mx-auto py-8 px-6 rounded-3xl text-white w-full overflow-x-scroll scrollbar-hide cursor-grab">
        <div className="flex gap-4 w-max mx-auto">
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
          {/* Website logo */}
          <div className="bg-[#222222] py-3 px-4 border-[1.5px] border-[#434343]">
            <img src={Kewebsite} alt="" />
          </div>
          {/* Company logo */}
          <div className="bg-[#222222] py-3 px-4 border-[1.5px] border-[#434343]">
            <img src={Qodr} alt="" />
          </div>
          {/* Website logo */}
          <div className="bg-[#222222] py-3 px-4 border-[1.5px] border-[#434343]">
            <img src={Kewebsite} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
