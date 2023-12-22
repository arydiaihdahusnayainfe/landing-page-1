import { Link } from "react-router-dom";
import CardProject from "../data/project/CardProject";
import dataProject from "../data/project/dataProject";

const RouteSeeMore = () => {
  return (
    <>
      <nav className="md:flex justify-between items-center w-[80%] rounded-[64px] shadow-[0_5px_50px_0_#262626] bg-section mx-auto px-3 md:px-8 py-3 my-10">
        <div>
          <Link to="/">
            <h1 className="hover:bg-gradient-to-r from-[#8044E2] to-[#E2446A] transition-all rounded-[64px] px-6 py-3 text-center text-[32px] mobile-l:text-[40px] md:text-[48px] lg:text-[48px] text-white cabinet-grotesk-extrabold leading-10 lg:leading-[64px]">
              Arydia
            </h1>
          </Link>
        </div>
        <div className="mt-5 md:mt-0">
          <h1 className="text-center text-[32px] mobile-l:text-[40px] md:text-[48px] lg:text-[48px] text-white cabinet-grotesk-extrabold px-6 py-3 leading-10 lg:leading-[64px]">
            Project
          </h1>
        </div>
      </nav>

      <section className="w-[80%] mx-auto my-5">
        {dataProject.map((data, index) => (
          <CardProject
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
            image={data.image}
            link={data.link}
          />
        ))}
      </section>
    </>
  );
};

export default RouteSeeMore;
