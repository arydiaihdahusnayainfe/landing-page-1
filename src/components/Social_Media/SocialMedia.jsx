import linkedin from "../../assets/svg/Linkedin.svg";
import github from "../../assets/svg/Github.svg";
import telegram from "../../assets/svg/Telegram.svg";
import instagram from "../../assets/svg/Instagram.svg";
import twitter from "../../assets/svg/Twitter.svg";
import tiktok from "../../assets/svg/Tiktok.svg";

function SocialMedia() {
  return (
    <>
      {/* Social media section */}
      <section
        id="social-media"
        className="mt-2 lg:mt-5 text-white grid grid-cols-2 gap-2 justify-between lg:justify-items-stretch lg:grid-cols-6 items-stretch overflow-x-scroll scrollbar-hide">
        {/* Left column */}
        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/arydia-ihda-husnayain-a143942a4/"
          target="_blank"
          rel="noreferrer noopener">
          <div className="bg-section py-4 px-7 md:py-7 lg:py-3 lg:px-2 rounded-[52px] w-full flex gap-1 md:gap-3 items-center lg:justify-center cabinet-grotesk-bold text-xl md:text-4xl lg:text-xl hover:bg-slate-700 transition-all">
            <img className="md:w-[35px] lg:w-[24px]" src={linkedin} alt="" />
            linkedin
          </div>
        </a>
        {/* GitHub link */}
        <a
          href="https://github.com/arydiaihdahusnayainfe/"
          target="_blank"
          rel="noreferrer noopener">
          <div className="bg-section py-4 px-7 md:py-7 lg:py-3 lg:px-2 rounded-[52px] flex gap-1 md:gap-3 items-center lg:justify-center cabinet-grotesk-bold text-xl md:text-4xl lg:text-xl hover:bg-slate-700 transition-all">
            <img className="md:w-[35px] lg:w-[24px]" src={github} alt="" />
            github
          </div>
        </a>
        {/* Telegram link */}
        <a
          href="https://t.me/learn_brain"
          target="_blank"
          rel="noreferrer noopener">
          <div className="bg-section py-4 px-7 md:py-7 lg:py-3 lg:px-2 rounded-[52px] flex gap-1 md:gap-3 items-center lg:justify-center cabinet-grotesk-bold text-xl md:text-4xl lg:text-xl hover:bg-slate-700 transition-all">
            <img className="md:w-[35px] lg:w-[24px]" src={telegram} alt="" />
            telegram
          </div>
        </a>
        {/* Right column */}
        {/* Instagram link */}
        <a
          href="https://www.instagram.com/arydiahusnayain_/"
          target="_blank"
          rel="noreferrer noopener">
          <div className="bg-section py-4 px-6 md:py-7 lg:py-3 lg:px-2 rounded-[52px] flex gap-1 md:gap-3 items-center lg:justify-center cabinet-grotesk-bold text-xl md:text-4xl lg:text-xl hover:bg-slate-700 transition-all">
            <img className="md:w-[35px] lg:w-[24px]" src={instagram} alt="" />
            instagram
          </div>
        </a>
        {/* Twitter link */}
        <a
          href="https://twitter.com/arydiaihdafe"
          target="_blank"
          rel="noreferrer noopener">
          <div className="bg-section py-4 px-7 md:py-7 lg:py-3 lg:px-2 rounded-[52px] flex gap-1 md:gap-3 items-center lg:justify-center cabinet-grotesk-bold text-xl md:text-4xl lg:text-xl hover:bg-slate-700 transition-all">
            <img className="md:w-[35px] lg:w-[24px]" src={twitter} alt="" />
            twitter
          </div>
        </a>
        {/* TikTok link */}
        <a
          href="https://www.tiktok.com/id-ID/"
          target="_blank"
          rel="noreferrer noopener">
          <div className="bg-section py-4 px-7 md:py-7 lg:py-3 lg:px-2 rounded-[52px] flex gap-1 md:gap-3 items-center lg:justify-center cabinet-grotesk-bold text-xl md:text-4xl lg:text-xl hover:bg-slate-700 transition-all">
            <img className="md:w-[35px] lg:w-[24px]" src={tiktok} alt="" />
            tiktok
          </div>
        </a>
      </section>
    </>
  );
}

export default SocialMedia;
