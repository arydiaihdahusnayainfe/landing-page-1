function Skill() {
  return (
    <section id="skill" className="mt-2 text-white h-[188px]">
      <div className="grid grid-cols-4 grid-rows-3 gap-2 h-full">
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom row-span-3 flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#59AFFF] rounded-2xl">
          <p className="text-[18px] cabinet-grotesk-bold m-auto">React</p>
        </div>
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#FFA53C] rounded-2xl">
          <p className="text-[18px] cabinet-grotesk-bold m-auto">HTML</p>
        </div>
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom col-start-2 row-start-2 flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#4759FF] rounded-2xl">
          <p className="text-[18px] cabinet-grotesk-bold m-auto">CSS</p>
        </div>
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom col-span-2 col-start-2 row-start-3 flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#64C7FF] rounded-2xl">
          <p className="text-[18px] cabinet-grotesk-bold m-auto">Tailwind</p>
        </div>
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom row-span-2 col-start-3 row-start-1 flex items-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#FFF964] rounded-2xl">
          <p className="text-[18px] cabinet-grotesk-bold m-auto">JS</p>
        </div>
        <div className="spin4 transition-all duration-500 bg-size-200 hover:bg-right-bottom row-span-3 col-start-4 row-start-1 grid place-content-center h-full w-full bg-gradient-to-t from-[#0c0c0c] to-slate-800/50 border-[1px] border-[#63FF98] rounded-2xl">
          <p className="text-[18px] cabinet-grotesk-bold m-auto">Node.js</p>
          <p className="text-[18px] cabinet-grotesk-bold m-auto">Next.js</p>
        </div>
      </div>
    </section>
  );
}

export default Skill;
