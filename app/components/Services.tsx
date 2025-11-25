import { FaBullhorn, FaChalkboardTeacher, FaGlobe, FaIdCard, FaPaintBrush, FaPrint } from "react-icons/fa";
import SectionTitle from "./helper/SectionTitle";
import ServicesCard from "./helper/ServicesCard";

const Services = () => {
    const servicesData = [
        {
            Icon: FaPaintBrush,
            title: "Graphics Design",
            description: "Creative visual solutions for branding and marketing.",
            points: [
                "Logo Design",
                "Brand Identity",
                "Posters & Flyers",
                "Social Media Graphics",
                "Business Cards & Brochures",
            ],
        },
        {
            Icon: FaGlobe,
            title: "Web Development",
            description: "Modern and responsive websites for businesses and individuals.",
            points: [
                "Portfolio Websites",
                "Business Websites",
                "E-commerce Setup",
                "Landing Pages",
                "Website Redesign",
            ],
        },
        {
            Icon: FaIdCard,
            title: "Business Stationery",
            description: "Design professional business cards and stationery easily.",
            points: [
                "Business Cards",
                "Letterheads",
                "Envelopes",
                "Invoices & Forms",
                "Corporate Stationery",
            ],
        },
        {
            Icon: FaPrint,
            title: "Printing Designs",
            description: "High-quality print-ready designs for promotional materials.",
            points: [
                "Bill Books & Letterheads",
                "Banners & Flex Prints",
                "Packaging Design",
                "Invitation Cards",
                "Certificates & ID Cards",
            ],
        },
        {
            Icon: FaBullhorn,
            title: "Digital Marketing",
            description: "Digital branding and promotion to increase visibility.",
            points: [
                "Social Media Management",
                "Ad Campaign Design",
                "Content Strategy",
                "Brand Promotion",
                "Analytics & Reporting",
            ],
        },
        {
            Icon: FaChalkboardTeacher,
            title: "Training Classes",
            description: "Skill-based training programs for beginners and professionals.",
            points: [
                "Graphic Design Fundamentals",
                "Photoshop & Illustrator",
                "Web Development Basics",
                "Social Media Marketing",
                "Project-Based Learning",
            ],
        },
    ];
    return (
        <div className="py-20">
            <SectionTitle title="Services" />
            <p className="text-center text-6xl font-bold uppercase">Creative Services</p>
            <div className="flex flex-wrap justify-center gap-14 px-10 mt-14">
                {servicesData.map((service, i) => (
                    <div key={i} className="w-full sm:w-1/2 lg:w-1/4 flex hover:scale-105 transition-transform">
                        <ServicesCard
                            Icon={service.Icon}
                            title={service.title}
                            description={service.description}
                            points={service.points}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;