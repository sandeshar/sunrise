import Image from "next/image";

const Footer = () => {
    return (
        <div className="grid grid-cols-3 ">
            <div className="flex flex-col justify-center items-center"><Image src={'/sunriselogo.png'} alt="Sunrise Logo" width={100} height={100} /></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Footer;