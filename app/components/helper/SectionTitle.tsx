import { FaCircle } from "react-icons/fa";

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => {
    return (
        <div className="flex flex-col items-center space-y-3 text-xl md:text-3xl font-semibold text-gray-400 text-center justify-center my-5 uppercase">
            <div className="flex items-center gap-3"><FaCircle size={15} className="fill-red-600" /> <p>{title}</p> <FaCircle size={15} className="fill-red-600" /></div>
            {subtitle && <p className="text-center text-4xl md:text-6xl font-bold uppercase">{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;