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
        <div className="group relative bg-white border border-slate-200 p-10 rounded-2xl hover:border-primary/40 transition-all duration-300 card-hover-gradient">
            <div className="mb-8 flex justify-center">
                <div className="relative">
                    <Icon size={48} className=" text-primary transition-colors duration-300" />
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/10 group-hover:bg-primary/20 rounded-full transition-all duration-300"></div>
                </div>
            </div>
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-3 text-slate-800">{title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[300px] mx-auto">
                    {description}
                </p>
            </div>
            <ul className="space-y-5">
                {points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                        <FaCheck className="text-primary text-xl font-bold" />
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesCard;