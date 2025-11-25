import SectionTitle from "./helper/SectionTitle";

const Contact = () => {
    return (
        <div>
            <SectionTitle title="Contact" />
            <p className="text-center text-6xl font-bold uppercase">Get in Touch</p>
            <div className="mt-10 mx-auto text-center text-lg italic text-gray-700 overflow-hidden p-5">
                <p>We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions. Reach out to us via email at contact@sunrisedesigns.com.</p>
            </div>
        </div>
    );
};

export default Contact;