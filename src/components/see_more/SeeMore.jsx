import DoubleRight from "../../assets/svg/DoubleRight.svg";

function SeeMore() {
  return (
    <>
      <section className="mt-2 text-white rounded-3xl bg-gradient-to-r from-[#8044E2] to-[#E2446A] hover:bg-gradient-to-l from-[#E2446A] to-[#8044E2] transition-all p-[3px]">
        <div className="group m-auto bg-section px-10 py-6 rounded-3xl justify-around items-center flex">
          <div className="text-[32px] cabinet-grotesk-bold leading-10">
            See more
          </div>
          <div className="group-hover:translate-x-8 group-hover:scale-150 transition-all w-fit">
            <img src={DoubleRight} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SeeMore;
