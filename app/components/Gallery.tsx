import Image from "next/image";
import SectionTitle from "./helper/SectionTitle";

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

            <div className="px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
                {images.map((src, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
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
        </div>
    );
};

export default Gallery;
