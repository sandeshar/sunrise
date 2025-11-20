import Image from "next/image";

const Navbar = () => {
    return (
        <div className="px-32 py-1 flex justify-between items-center bg-white shadow-md">
            <Image src="/sunriselogo.png" width={120} height={40} alt="Sunrise Logo" />
            <ul className="flex space-x-8 font-bold items-center">
                <li className="hover:cursor-pointer">Home</li>
                <li className="hover:cursor-pointer">About</li>
                <li className="hover:cursor-pointer">Services</li>
                <li className="hover:cursor-pointer">Contact</li>
                <li className="text-red-600 border-2 border-red-600 px-4 py-1 rounded hover:cursor-pointer">Let's Start</li>
            </ul>
        </div>
    );
};

export default Navbar;