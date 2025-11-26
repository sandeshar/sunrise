import Image from "next/image";
import { FaArrowDown, FaCircle, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="flex flex-col lg:flex-row py-8 sm:py-10 lg:py-12 md:min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Social Media Icons - Hidden on mobile, visible on larger screens */}
      <ul className="hidden lg:flex justify-around items-center px-4 xl:px-8 2xl:px-12 flex-col space-y-12 xl:space-y-20">
        <li><FaFacebook size={32} className="hover:text-red-600 transition-colors cursor-pointer xl:w-10 xl:h-10" /></li>
        <li><FaInstagram size={32} className="hover:text-red-600 transition-colors cursor-pointer xl:w-10 xl:h-10" /></li>
        <li><FaLinkedin size={32} className="hover:text-red-600 transition-colors cursor-pointer xl:w-10 xl:h-10" /></li>
        <li><FaYoutube size={32} className="hover:text-red-600 transition-colors cursor-pointer xl:w-10 xl:h-10" /></li>
        <li><FaCircle size={16} className="fill-red-600 xl:w-5 xl:h-5" /></li>
      </ul>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 w-full px-7 sm:px-4 items-center">
        {/* Content Section */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 lg:pr-4">
          <div className="flex items-center text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-400 space-x-2 sm:space-x-3 lg:space-x-4">
            <FaCircle size={12} className="fill-red-600 shrink-0 sm:w-4 sm:h-4" /> <p>Bringing Ideas</p>
          </div>
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight font-medium">
            <span className="text-red-600 font-bold text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl block mb-1 sm:mb-2">Artistry</span>
            in Every pixel
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed max-w-xl">
            We are a graphics design and printing agency offering creative visual solutions and high-quality printing services. We design logos, branding materials, promotional graphics, and deliver professional prints for businesses, events, and personal needs.
          </p>
          {/* <div className="flex flex-col items-center lg:items-start space-y-3 sm:space-y-4 pt-6 sm:pt-10 md:pt-12 lg:pt-16">
            <p className="text-red-600 text-lg sm:text-xl md:text-2xl font-semibold">Get Started</p>
            <FaArrowDown className="fill-red-600 animate-bounce w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div> */}
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center order-first lg:order-last py-4 sm:py-6 lg:py-0">
          <div className="relative w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[525px]">
            <Image
              src="/greet.png"
              width={525}
              height={525}
              alt="Sunrise Greetings"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile Social Media Icons */}
      <div className="lg:hidden flex justify-center items-center space-x-6 sm:space-x-8 mt-6 sm:mt-8 pb-4">
        <FaFacebook size={28} className="hover:text-red-600 transition-colors cursor-pointer sm:w-8 sm:h-8" />
        <FaInstagram size={28} className="hover:text-red-600 transition-colors cursor-pointer sm:w-8 sm:h-8" />
        <FaLinkedin size={28} className="hover:text-red-600 transition-colors cursor-pointer sm:w-8 sm:h-8" />
        <FaYoutube size={28} className="hover:text-red-600 transition-colors cursor-pointer sm:w-8 sm:h-8" />
      </div>
    </div>
  );
};

export default Hero