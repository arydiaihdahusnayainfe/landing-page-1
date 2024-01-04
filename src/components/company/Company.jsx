import CardCompany from "../../data/company/CardCompany";
import dataCompany from "../../data/company/dataCompany";

function Company() {
  return (
    <>
      {/* Company section */}
      <section
        id="company"
        className="bg-section mt-2 lg:mt-5 lg:mx-auto py-8 px-6 rounded-3xl text-white w-full overflow-x-scroll scrollbar-hide cursor-grab">
        <div className="flex gap-4 w-max mx-auto">
          {/* Company logo */}
          {dataCompany.map((data, index) => (
            <CardCompany key={index} logo={data.logo} alt={data.alt} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Company;
