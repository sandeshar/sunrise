import { FaCircle } from "react-icons/fa";
import SectionTitle from "./helper/SectionTitle";
import Image from "next/image";

const Mission = () => {
    return (
        <div className="pt-20">
            <SectionTitle title="Our mission" />
            <p className="text-center text-6xl font-bold uppercase">Pixel Perfect</p>
            <div className="grid grid-cols-2 justify-center items-center px-44 py-24">
                <div className="relative flex items-center justify-center w-max h-max mx-auto">
                    <div className="bg-yellow-400 absolute bottom-0 right-0 rotate-[30deg] w-48 h-48 origin-bottom-right" />
                    <div className="bg-yellow-400 absolute bottom-4 right-0 rotate-[-30deg] w-72 h-72 origin-bottom-right" />
                    <Image src="/haveadream.png" width={300} height={300} className="z-10" alt="Our Mission" />
                </div>
                <div className="flex flex-col space-y-6">
                    <p className="text-4xl font-semibold">Turning Ideas into Digital Brilliance</p>
                    <p className="text-justify text-lg font-semibold text-gray-400">
                        At Sunrise Graphics, our mission is to turn ideas into visually compelling results. We deliver graphic design, web development, and printing services that help brands communicate clearly and stand out. By blending creativity with modern technology, we build responsive, engaging websites and memorable identities. With strong quality standards and attention to detail, we aim to exceed expectations and create lasting impressions across digital and print. We also teach, providing workshops and training that empower clients and communities with practical design and web development skills.
                    </p>
                    <a className="border-2 border-red-600 px-4 py-2 font-bold hover:cursor-pointer flex justify-center items-center space-x-2 w-max"><FaCircle size={15} className="fill-red-600" /><p>Contact Us Today</p></a>
                </div>
            </div>
        </div>
    );
};

export default Mission;