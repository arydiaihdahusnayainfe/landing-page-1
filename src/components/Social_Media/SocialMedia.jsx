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
        className="mt-2 text-white flex gap-2 justify-between items-center">
        {/* Left column */}
        <div className="flex flex-col gap-2 w-1/2 items-stretch">
          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/arydia-ihda-husnayain-a143942a4/"
            target="_blank"
            rel="noreferrer noopener">
            <div className="bg-section py-4 px-7 md:py-7 rounded-[52px] w-full flex gap-1 md:gap-3 items-center cabinet-grotesk-bold text-xl md:text-4xl hover:bg-slate-700 transition-all">
              <img className="md:w-[35px]" src={linkedin} alt="" />
              linkedin
            </div>
          </a>
          {/* GitHub link */}
          <a
            href="https://github.com/arydiaihdahusnayainfe/"
            target="_blank"
            rel="noreferrer noopener">
            <div className="bg-section py-4 px-7 md:py-7 rounded-[52px] w-full flex gap-1 md:gap-3 items-center cabinet-grotesk-bold text-xl md:text-4xl hover:bg-slate-700 transition-all">
              <img className="md:w-[35px]" src={github} alt="" />
              github
            </div>
          </a>
          {/* Telegram link */}
          <a
            href="https://t.me/learn_brain"
            target="_blank"
            rel="noreferrer noopener">
            <div className="bg-section py-4 px-7 md:py-7 rounded-[52px] w-full flex gap-1 md:gap-3 items-center cabinet-grotesk-bold text-xl md:text-4xl hover:bg-slate-700 transition-all">
              <img className="md:w-[35px]" src={telegram} alt="" />
              telegram
            </div>
          </a>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-2 w-1/2">
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/arydiahusnayain_/"
            target="_blank"
            rel="noreferrer noopener">
            <div className="bg-section py-4 px-6 md:py-7 rounded-[52px] w-full flex gap-1 md:gap-3 items-center cabinet-grotesk-bold text-xl md:text-4xl hover:bg-slate-700 transition-all">
              <img className="md:w-[35px]" src={instagram} alt="" />
              instagram
            </div>
          </a>
          {/* Twitter link */}
          <a
            href="https://twitter.com/arydiaihdafe"
            target="_blank"
            rel="noreferrer noopener">
            <div className="bg-section py-4 px-7 md:py-7 rounded-[52px] w-full flex gap-1 md:gap-3 items-center cabinet-grotesk-bold text-xl md:text-4xl hover:bg-slate-700 transition-all">
              <img className="md:w-[35px]" src={twitter} alt="" />
              twitter
            </div>
          </a>
          {/* TikTok link */}
          <a
            href="https://www.tiktok.com/id-ID/"
            target="_blank"
            rel="noreferrer noopener">
            <div className="bg-section py-4 px-7 md:py-7 rounded-[52px] w-full flex gap-1 md:gap-3 items-center cabinet-grotesk-bold text-xl md:text-4xl hover:bg-slate-700 transition-all">
              <img className="md:w-[35px]" src={tiktok} alt="" />
              tiktok
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default SocialMedia;
