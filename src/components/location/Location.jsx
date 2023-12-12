import { MapPin } from "lucide-react";

function Location() {
  return (
    <>
      <section
        id="location"
        className="bg-section mt-2 py-8 px-6 rounded-3xl text-white">
        {/* icon */}
        <div className="text-3xl">
          <MapPin className="lg:hidden" size={64} />
          <MapPin className="hidden lg:block" size={100} />
        </div>
        {/* text */}
        <div className="mt-8">
          <p className="text-[28px] mobile-l:text-[32px] md:text-[40px] cabinet-grotesk-bold leading-10">
            Based in Yogyakarta <span className="text-[#A45CEC]">GMT+7</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Location;
