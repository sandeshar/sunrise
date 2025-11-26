import { MdOutlineDesignServices } from "react-icons/md";
import WorkComponent from "./helper/WorkComponent";
import { PiPrinterBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";

const Work = () => {
    return (
        <div className="flex flex-col md:flex-row space-x-10 md:justify-center md:items-center gap-10 p-12">
            <WorkComponent
                Icon={MdOutlineDesignServices}
                title="Creative Design"
                description="We provide innovative and creative design solutions tailored to your needs." />
            <WorkComponent
                Icon={PiPrinterBold}
                title="High-Quality Printing"
                description="Our printing services ensure vibrant colors and sharp details for all your materials." />
            <WorkComponent
                Icon={GiTeacher}
                title="Expert Training"
                description="We offer professional training sessions to help you master design and printing techniques." />
        </div>
    );
};

export default Work;