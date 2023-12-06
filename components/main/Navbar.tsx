import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="hidden sm:flex flex-row items-center">
          <Image
            src="/navlogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-normal text-lg hidden lg:block text-gray-100 custom-font">
            WebChain Dev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between mr-0 md:mr-20">
          <div className="flex items-center justify-between text-sm sm:text-base font-medium w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="hidden sm:flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
