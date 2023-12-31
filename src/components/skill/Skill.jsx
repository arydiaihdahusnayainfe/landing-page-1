function Skill() {
  return (
    <section
      id="skill"
      className="mt-2 lg:mt-5 text-white h-[188px] md:h-[300px] lg:h-max">
      <div className="grid grid-cols-4 grid-rows-3 gap-2 h-full lg:grid lg:grid-cols-7 lg:grid-rows-1 overflow-x-scroll scrollbar-hide lg:items-stretch lg:justify-stretch">
        {/* React skill */}
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom row-span-3 lg:row-span-1 flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#59AFFF] rounded-2xl">
          <p className="text-[18px] md:text-[40px] lg:text-[20px] cabinet-grotesk-bold m-auto">
            React
          </p>
        </div>
        {/* HTML skill */}
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#FFA53C] rounded-2xl">
          <p className="text-[18px] md:text-[40px] lg:text-[20px] cabinet-grotesk-bold m-auto">
            HTML
          </p>
        </div>
        {/* CSS skill */}
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom col-start-2 row-start-2 lg:row-span-1 lg:col-span-1 flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#4759FF] rounded-2xl">
          <p className="text-[18px] md:text-[40px] lg:text-[20px] cabinet-grotesk-bold m-auto">
            CSS
          </p>
        </div>
        {/* Tailwind skill */}
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom col-span-2 col-start-2 row-start-3 lg:row-span-1 lg:col-span-1 flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#64C7FF] rounded-2xl">
          <p className="text-[18px] md:text-[40px] lg:text-[20px] cabinet-grotesk-bold m-auto">
            Tailwind
          </p>
        </div>
        {/* JavaScript skill */}
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom row-span-2 col-start-3 row-start-1 lg:row-span-1 lg:col-span-1 flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#FFF964] rounded-2xl">
          <p className="text-[18px] md:text-[40px] lg:text-[20px] cabinet-grotesk-bold m-auto">
            JS
          </p>
        </div>
        {/* Node.js and Next.js skill */}
        <div className="spin4 p-3 transition-all duration-500 bg-size-200 hover:bg-right-bottom row-span-3 col-start-4 row-start-1 lg:row-span-1 lg:col-span-2 grid place-content-center lg:flex lg:gap-2 h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#63FF98] rounded-2xl">
          <p className="text-[18px] md:text-[40px] lg:text-[20px] cabinet-grotesk-bold m-auto">
            Node.js
          </p>
          <p className="text-[18px] md:text-[40px] lg:text-[20px] cabinet-grotesk-bold m-auto">
            Next.js
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skill;
