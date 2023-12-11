import ArrowBtn from "../../assets/svg/ArrowButton.svg";

function Project() {
  return (
    <>
      <section id="project" className="mt-2 text-white">
        <div className="bg-section mt-2 rounded-3xl p-2">
          <div className="py-5 px-3">
            <div>
              <h2 className="text-[32px] cabinet-grotesk-bold">ILM</h2>
              <p className="text-[16px] cabinet-grotesk-medium text-[#8A8B90]">
                Educational quiz game
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[16px] cabinet-grotesk-medium">
                Learn Islamic knowledge from answering quizez and get coin!
              </p>
            </div>
          </div>
          <div className="bg-slate-400 m-auto h-[95%] rounded-3xl mt-8 relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="bg-cover bg-center bg-no-repeat w-full h-[305px] object-cover"
                src="https://source.unsplash.com/random?transportation"
                alt=""
              />
            </div>
            <a href="#">
              <div className="absolute right-5 bottom-5 bg-white p-4 rounded-full hover:bg-slate-500 transition-all">
                <img src={ArrowBtn} alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="bg-section mt-2 rounded-3xl p-2">
          <div className="py-5 px-3">
            <div>
              <h2 className="text-[32px] cabinet-grotesk-bold">ILM</h2>
              <p className="text-[16px] cabinet-grotesk-medium text-[#8A8B90]">
                Educational quiz game
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[16px] cabinet-grotesk-medium">
                Learn Islamic knowledge from answering quizez and get coin!
              </p>
            </div>
          </div>
          <div className="bg-slate-400 m-auto h-[95%] rounded-3xl mt-8 relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="bg-cover bg-center bg-no-repeat w-full h-[305px] object-cover"
                src="https://source.unsplash.com/random?transportation"
                alt=""
              />
            </div>
            <a href="#">
              <div className="absolute right-5 bottom-5 bg-white p-4 rounded-full hover:bg-slate-500 transition-all">
                <img src={ArrowBtn} alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="bg-section mt-2 rounded-3xl p-2">
          <div className="py-5 px-3">
            <div>
              <h2 className="text-[32px] cabinet-grotesk-bold">ILM</h2>
              <p className="text-[16px] cabinet-grotesk-medium text-[#8A8B90]">
                Educational quiz game
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[16px] cabinet-grotesk-medium">
                Learn Islamic knowledge from answering quizez and get coin!
              </p>
            </div>
          </div>
          <div className="bg-slate-400 m-auto h-[95%] rounded-3xl mt-8 relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="bg-cover bg-center bg-no-repeat w-full h-[305px] object-cover"
                src="https://source.unsplash.com/random?transportation"
                alt=""
              />
            </div>
            <a href="#">
              <div className="absolute right-5 bottom-5 bg-white p-4 rounded-full hover:bg-slate-500 transition-all">
                <img src={ArrowBtn} alt="" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
