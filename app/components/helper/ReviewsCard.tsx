import Image from "next/image";

interface ReviewsCardProps {
    imageSrc: string;
    imageAlt: string;
    name: string;
    handle: string;
    review: string;
}

const ReviewsCard = ({ imageSrc, imageAlt, name, handle, review }: ReviewsCardProps) => {
    return (
        <div className="p-5 min-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-4">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={60}
                    height={60}
                    className="rounded-full w-16 h-16 object-cover"
                />
                <div>
                    <p className="font-bold text-lg">{name}</p>
                    <p className="text-gray-500 text-sm">{handle}</p>
                </div>
            </div>

            <div className="mt-4 text-gray-700 text-sm">
                <span className="font-semibold text-justify text-2xl text-gray-400">"</span>
                {review}
                <span className="text-2xl text-gray-400">"</span>
            </div>
        </div>
    );
};

export default ReviewsCard;