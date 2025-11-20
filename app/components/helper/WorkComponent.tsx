import { IconType } from "react-icons";

const WorkComponent = ({ Icon, title, description }: { Icon: IconType, title: string, description: string }) => {
    return (
        <div className="flex max-w-xs space-x-2 text-justify">
            <Icon size={100} className="fill-red-600" />
            <div>
                <p className="font-mono uppercase font-semibold text-xl">{title}</p>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default WorkComponent;