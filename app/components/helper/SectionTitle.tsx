import { FaCircle } from "react-icons/fa";

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center space-x-2 text-3xl font-semibold text-gray-400 text-center justify-center my-5 uppercase">
            <FaCircle size={15} className="fill-red-600" /> <p>{title}</p> <FaCircle size={15} className="fill-red-600" />
        </div>
    );
};

export default SectionTitle;