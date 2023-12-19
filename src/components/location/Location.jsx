import { MapPin } from "lucide-react";

function Location() {
  return (
    <>
      <section
        id="location"
        className="bg-section mt-2 lg:mt-5 py-8 px-6 lg:py-[72px] lg:px-10 rounded-3xl text-white lg:grid h-full">
        {/* icon */}
        <div className="text-3xl">
          <MapPin className="lg:hidden" size={64} />
          <MapPin className="hidden lg:block" size={100} />
        </div>
        {/* text */}
        <div className="mt-8">
          <p className="text-[28px] mobile-l:text-[32px] md:text-[40px] lg:text-[48px] cabinet-grotesk-bold leading-10 lg:leading-[64px]">
            Based in Yogyakarta <span className="text-[#A45CEC]">GMT+7</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Location;
