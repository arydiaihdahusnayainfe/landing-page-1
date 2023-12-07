import { MapPin } from "lucide-react";

function Location() {
  return (
    <>
      <div className="bg-section mt-2 py-8 px-6 rounded-3xl text-white">
        <div className="text-3xl">
          <MapPin size={64} />
        </div>
        <div className="mt-8">
          <p className="text-[32px] cabinet-grotesk-bold">
            Based in Yogyakarta <span className="text-[#A45CEC]">GMT+7</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Location;
