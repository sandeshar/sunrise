import Image from "next/image";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 py-10 px-6 md:px-10 lg:px-20 bg-gray-100 gap-6 lg:gap-10">
            <div className="flex flex-col justify-center items-center md:col-span-2 lg:col-span-2">
                <Image src={'/sunriselogo.png'} alt="Sunrise Logo" width={200} height={200} />
                <p className="mt-4 text-gray-600 text-center">© 2024 Sunrise Designs. All rights reserved.</p>
                <p className="text-center">Designed by <a href="https://aryalsandesh.com.np" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-bold">Sandesh Aryal</a></p>
            </div>
            <div>
                <p className="font-bold">Services</p>
                <ul className="list-none space-y-2 mt-2">
                    <li>Logo Design</li>
                    <li>Brand Identity</li>
                    <li>Printing Designs</li>
                    <li>Digital Marketing</li>
                    <li>Training Classes</li>
                </ul>
            </div>
            <div>
                <p className="font-bold">Contact Us</p>
                <ul className="list-none space-y-2 mt-2">
                    <li>Email: sunriseprint07@gmail.com</li>
                    <li>Phone: +014240119</li>
                    <li>Address: Aadwait Marg, Bagbazar, Kathmandu</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;