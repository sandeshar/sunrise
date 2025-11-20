import { IconType } from "react-icons";

const WorkComponent = ({ Icon, title, description }: { Icon: IconType, title: string, description: string }) => {
    return (
        <div>
            <Icon size={50} />
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
};

export default WorkComponent;