import ArrowBtn from "../../assets/svg/ArrowButton.svg";

function Project() {
  return (
    <>
      <section id="project" className="mt-2 lg:mt-5 text-white">
        {/* Project section */}
        <div className="bg-section mt-2 lg:mt-5 rounded-3xl p-2 lg:max-h-[640px]">
          <div className="py-5 px-3 lg:px-10 lg:flex lg:justify-between">
            <div>
              {/* Project title */}
              <h2 className="text-[32px] md:text-[50px] cabinet-grotesk-bold">
                ILM
              </h2>
              {/* Project description */}
              <p className="text-[16px] md:text-[25px] cabinet-grotesk-medium text-[#8A8B90]">
                Educational quiz game
              </p>
            </div>
            <div className="mt-4 lg:w-[50%]">
              {/* Project details */}
              <p className="text-[16px] md:text-[25px] cabinet-grotesk-medium">
                Learn Islamic knowledge from answering quizez and get coin!
              </p>
            </div>
          </div>
          <div className="bg-slate-400 m-auto h-[95%] rounded-3xl mt-8 relative">
            <div className="overflow-hidden rounded-3xl">
              {/* Project image */}
              <img
                className="bg-cover bg-center bg-no-repeat w-full h-[305px] object-cover"
                src="https://source.unsplash.com/random?transportation"
                alt=""
              />
            </div>
            {/* Arrow button */}
            <a href="#">
              <div className="absolute right-5 bottom-5 bg-white p-4 rounded-full hover:bg-slate-500 transition-all">
                <img className="md:w-[35px]" src={ArrowBtn} alt="" />
              </div>
            </a>
          </div>
        </div>
        {/* Project section */}
        <div className="bg-section mt-2 lg:mt-5 rounded-3xl p-2">
          <div className="py-5 px-3 lg:px-10 lg:flex lg:justify-between">
            <div>
              {/* Project title */}
              <h2 className="text-[32px] md:text-[50px] cabinet-grotesk-bold">
                ILM
              </h2>
              {/* Project description */}
              <p className="text-[16px] md:text-[25px] cabinet-grotesk-medium text-[#8A8B90]">
                Educational quiz game
              </p>
            </div>
            <div className="mt-4 lg:w-[50%]">
              {/* Project details */}
              <p className="text-[16px] md:text-[25px] cabinet-grotesk-medium">
                Learn Islamic knowledge from answering quizez and get coin!
              </p>
            </div>
          </div>
          <div className="bg-slate-400 m-auto h-[95%] rounded-3xl mt-8 relative">
            <div className="overflow-hidden rounded-3xl">
              {/* Project image */}
              <img
                className="bg-cover bg-center bg-no-repeat w-full h-[305px] object-cover"
                src="https://source.unsplash.com/random?transportation"
                alt=""
              />
            </div>
            {/* Arrow button */}
            <a href="#">
              <div className="absolute right-5 bottom-5 bg-white p-4 rounded-full hover:bg-slate-500 transition-all">
                <img className="md:w-[35px]" src={ArrowBtn} alt="" />
              </div>
            </a>
          </div>
        </div>
        {/* Project section */}
        <div className="bg-section mt-2 lg:mt-5 rounded-3xl p-2">
          <div className="py-5 px-3 lg:px-10 lg:flex lg:justify-between">
            <div>
              {/* Project title */}
              <h2 className="text-[32px] md:text-[50px] cabinet-grotesk-bold">
                ILM
              </h2>
              {/* Project description */}
              <p className="text-[16px] md:text-[25px] cabinet-grotesk-medium text-[#8A8B90]">
                Educational quiz game
              </p>
            </div>
            <div className="mt-4 lg:w-[50%]">
              {/* Project details */}
              <p className="text-[16px] md:text-[25px] cabinet-grotesk-medium">
                Learn Islamic knowledge from answering quizez and get coin!
              </p>
            </div>
          </div>
          <div className="bg-slate-400 m-auto h-[95%] rounded-3xl mt-8 relative">
            <div className="overflow-hidden rounded-3xl">
              {/* Project image */}
              <img
                className="bg-cover bg-center bg-no-repeat w-full h-[305px] object-cover"
                src="https://source.unsplash.com/random?transportation"
                alt=""
              />
            </div>
            {/* Arrow button */}
            <a href="#">
              <div className="absolute right-5 bottom-5 bg-white p-4 rounded-full hover:bg-slate-500 transition-all">
                <img className="md:w-[35px]" src={ArrowBtn} alt="" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
