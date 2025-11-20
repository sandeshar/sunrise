import Image from "next/image";
import { FaArrowDown, FaCircle, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex py-20 h-[calc(100vh-80px)]">
      <ul className="px-12 flex flex-col justify-center items-center space-y-20">
        <li><FaFacebook size={40} /></li>
        <li><FaInstagram size={40} /></li>
        <li><FaLinkedin size={40} /></li>
        <li><FaYoutube size={40} /></li>
        <li><FaCircle size={20} className="fill-red-600" /></li>
      </ul>
      <div className="grid grid-cols-2">
        <div className="space-y-6 px-4">
          <p className="flex items-center text-3xl font-semibold text-gray-400">
            <FaCircle size={15} className="fill-red-600 mr-5" /> Bringing Ideas
          </p>
          <p className="mt-2 uppercase sm:text-5xl md:text-8xl"><span className="text-red-600 font-bold sm:text-7xl md:text-9xl">Artistry</span><br /> in Every pixel</p>
          <p className="mt-4 text-gray-400">We are a graphics design and printing agency offering creative visual solutions and high-quality printing services. We design logos, branding materials, promotional graphics, and deliver professional prints for businesses, events, and personal needs.</p>
          <div className="flex flex-col items-center space-y-4 pt-20">
            <p className="text-red-600 text-2xl font-semibold">Get Started</p>
            <FaArrowDown className="fill-red-600 animate-bounce" size={30} />
          </div>
        </div>
        <div className="flex items-center justify-center"><Image src="/greet.png" width={525} height={100} alt="Sunrise Greetings" /></div>
      </div>
    </div>
  );
};

export default Hero