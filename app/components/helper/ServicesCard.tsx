import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

interface ServicesCardProps {
    Icon: IconType;
    title: string;
    description: string;
    points: string[];
}

const ServicesCard = ({ Icon, title, description, points }: ServicesCardProps) => {
    return (
        <div className="p-5 shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex flex-col items-center text-center h-full w-full">
            <div className="flex flex-col items-center text-center space-y-2">
                <Icon size={40} className="fill-red-600" />
                <p className="font-bold text-2xl">{title}</p>
                <p className="text-gray-600">{description}</p>
            </div>
            <ul className="list-none space-y-3 mt-4 w-full">
                {points.map((point, index) => (
                    <li key={index} className="flex items-center">
                        <FaCheck className="text-red-600 mr-2" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default ServicesCard;