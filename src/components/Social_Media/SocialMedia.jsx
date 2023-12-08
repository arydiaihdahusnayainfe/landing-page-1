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
      <section id="social-media" className="mt-2 text-white flex gap-2 justify-between items-center">
        {/* Left column */}
        <div className="flex flex-col gap-2 w-1/2">
          {/* LinkedIn link */}
          <a href="#">
            <div className="bg-section py-4 px-7 rounded-[52px] w-full flex gap-1 items-center cabinet-grotesk-bold text-xl hover:bg-slate-700 transition-all">
              <img src={linkedin} alt="" />
              linkedin
            </div>
          </a>
          {/* GitHub link */}
          <a href="#">
            <div className="bg-section py-4 px-7 rounded-[52px] w-full flex gap-1 items-center cabinet-grotesk-bold text-xl hover:bg-slate-700 transition-all">
              <img src={github} alt="" />
              github
            </div>
          </a>
          {/* Telegram link */}
          <a href="#">
            <div className="bg-section py-4 px-7 rounded-[52px] w-full flex gap-1 items-center cabinet-grotesk-bold text-xl hover:bg-slate-700 transition-all">
              <img src={telegram} alt="" />
              telegram
            </div>
          </a>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-2 w-1/2">
          {/* Instagram link */}
          <a href="#">
            <div className="bg-section py-4 px-6 rounded-[52px] w-full flex gap-1 items-center cabinet-grotesk-bold text-xl hover:bg-slate-700 transition-all">
              <img src={instagram} alt="" />
              instagram
            </div>
          </a>
          {/* Twitter link */}
          <a href="#">
            <div className="bg-section py-4 px-7 rounded-[52px] w-full flex gap-1 items-center cabinet-grotesk-bold text-xl hover:bg-slate-700 transition-all">
              <img src={twitter} alt="" />
              twitter
            </div>
          </a>
          {/* TikTok link */}
          <a href="#">
            <div className="bg-section py-4 px-7 rounded-[52px] w-full flex gap-1 items-center cabinet-grotesk-bold text-xl hover:bg-slate-700 transition-all">
              <img src={tiktok} alt="" />
              tiktok
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default SocialMedia;
