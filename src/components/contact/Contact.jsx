import { PhoneCall } from "lucide-react";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-section mt-2 lg:mt-5 py-8 lg:py-[74px] px-6 rounded-3xl text-white my-auto lg:grid h-full">
        {/* icon */}
        <div className="mx-auto w-fit">
          <PhoneCall size={64} />
        </div>
        {/* text */}
        <div className="text-center my-8">
          <p className="text-[32px] mobile-l:text-[40px] lg:text-[48px] cabinet-grotesk-bold leading-10 lg:leading-[64px]">
            Want to do a project together?
          </p>
        </div>
        {/* button contact */}
        <div>
          <a
            href="https://t.me/learn_brain"
            target="_blank"
            rel="noreferrer noopener">
            <button
              className="text-[24px] mobile-l:text-[32px] lg:text-[36px] p-2 cabinet-grotesk-bold b-gradiant b-gradiant border-b-2 border-l-[1px] border-r-[1px] md:border-b-[3px] md:border-l-[3px] md:border-r-[3px] shadow-[0_3px_12px_0_#F3568F] w-full rounded-[64px]"
              type="button">
              let’s talk
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
