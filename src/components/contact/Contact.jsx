import { PhoneCall } from "lucide-react";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="bg-section mt-2 py-8 px-6 rounded-3xl text-white">
        {/* icon */}
        <div className="mx-auto w-fit">
          <PhoneCall size={64} />
        </div>
        {/* text */}
        <div className="text-center my-8">
          <p className="text-[32px] cabinet-grotesk-bold leading-10">
            Want to do a project together?
          </p>
        </div>
        {/* button contact */}
        <div>
          <button
            className="text-[24px] p-2 cabinet-grotesk-bold b-gradiant b-gradiant border-b-2 border-l-[1px] border-r-[1px] shadow-[0_3px_12px_0_#F3568F] w-full rounded-[64px]"
            type="button">
            let’s talk
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
