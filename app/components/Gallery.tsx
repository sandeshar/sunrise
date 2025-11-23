import Image from "next/image";
import SectionTitle from "./helper/SectionTitle";
import { FaCircle } from "react-icons/fa";

const Gallery = () => {
    const images = [
        "/art1.jpg",
        "/art2.jpg",
        "/art3.jpg",
    ];

    return (
        <div className="pt-20">
            <SectionTitle title="Gallery" />
            <p className="text-center text-6xl font-bold uppercase">Creative Universe</p>

            <div className="px-5 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
                {images.map((src, index) => (
                    <div key={index} className="relative group overflow-hidden">
                        <Image
                            src={src}
                            alt={`Gallery Image ${index}`}
                            width={700}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                Hovered Text {index}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 grid grid-cols-2 px-5 gap-3">
                <div className="space-y-4">
                    <p className="text-6xl font-bold uppercase"><span className="bg-yellow-400 px-2">All</span> Projects</p>
                    <p className="text-gray-400 text-lg font-medium">Explore our diverse collection of creative works. From web design to digital art, our portfolio showcases a wide range of styles and techniques. Training and innovation are at the heart of what we do. We provide all kinds of digital and printing services that your business needs.</p>
                    <a className="border-2 border-red-600 px-4 py-2 font-bold hover:cursor-pointer flex justify-center items-center space-x-2 w-max"><FaCircle size={15} className="fill-red-600" /><p>View All</p></a>

                </div>
                <div className="flex space-x-2">
                    <Image
                        src={'/art1.jpg'}
                        alt={`Gallery Image`}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    /><Image
                        src={'/art1.jpg'}
                        alt={`Gallery Image`}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
            <div className="bg-red-600 text-white font-bold py-1 uppercase mt-10 -rotate-2 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee">
                    <span className="pr-20">In every pixel, there is a story waiting to be told. So let us help you tell yours.</span>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
