import { MapPin } from "lucide-react";

function Location() {
  return (
    <>
      <div
        id="location"
        className="bg-section mt-2 py-8 px-6 rounded-3xl text-white">
        {/* icon */}
        <div className="text-3xl">
          <MapPin size={64} />
        </div>
        {/* text */}
        <div className="mt-8">
          <p className="text-[32px] cabinet-grotesk-bold leading-10">
            Based in Yogyakarta <span className="text-[#A45CEC]">GMT+7</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Location;
