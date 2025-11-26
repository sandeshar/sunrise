import SectionTitle from "./helper/SectionTitle";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact">
            <SectionTitle title="Contact" subtitle="Get in Touch" />
            <div className="grid geid-cols-1 md:grid-cols-2 justify-center items-center gap-10 p-12" >
                <div>
                    <p className="font-bold text-2xl md:text-4xl flex justify-center items-center gap-2"><FaCheckCircle /> We'll respond to you in an hour.</p>
                    <p className="text-base md:text-xl text-gray-400 mt-5 text-center">Have questions, ideas or projects in mind? We'd love to hear from you! Contact us through our email or phone number provided below and let's start a conversation.</p>
                </div>
                <div className="relative px-20 py-5">
                    <div className="bg-yellow-400 inset-0 absolute m-12 rotate-[15deg]"></div>
                    <form className="flex flex-col px-10 py-14 shadow-[0_4px_15px_rgba(0,0,0,0.2)] rounded-xl relative bg-white">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" className="bg-gray-100 p-2 rounded" placeholder="Name" required />
                        <label htmlFor="email" className="mt-4">Email</label>
                        <input type="email" id="email" name="email" className="bg-gray-100 p-2 rounded" placeholder="Email" required />
                        <label htmlFor="message" className="mt-4">Message</label>
                        <textarea id="message" name="message" className="bg-gray-100 p-2 rounded" rows={4} placeholder="Message" required></textarea>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;