import ReviewsCard from "./helper/ReviewsCard";
import SectionTitle from "./helper/SectionTitle";

const Reviews = () => {
    const reviewsData = [
        {
            imageSrc: "/art1.jpg",
            imageAlt: "Client 1",
            name: "Jane Doe",
            handle: "@janedoe",
            review: "Sunrise Designs transformed our online presence with a stunning website. Highly recommended!"
        },
        {
            imageSrc: "/art2.jpg",
            imageAlt: "Client 2",
            name: "John Smith",
            handle: "@johnsmith",
            review: "Amazing creativity and professionalism. The team really exceeded our expectations."
        },
        {
            imageSrc: "/art3.jpg",
            imageAlt: "Client 3",
            name: "Alice Johnson",
            handle: "@alicej",
            review: "The designs were beautiful and really captured our brand's identity perfectly."
        },
        {
            imageSrc: "/art1.jpg",
            imageAlt: "Client 4",
            name: "Michael Brown",
            handle: "@michaelb",
            review: "Fast delivery and exceptional design quality. We couldn’t be happier with the results!"
        },
        {
            imageSrc: "/art2.jpg",
            imageAlt: "Client 5",
            name: "Sophia Lee",
            handle: "@sophial",
            review: "Professional team, creative ideas, and excellent support throughout the project."
        },
        {
            imageSrc: "/art3.jpg",
            imageAlt: "Client 6",
            name: "David Wilson",
            handle: "@davidw",
            review: "Truly outstanding work! Our website now perfectly represents our brand’s vision."
        },
    ];
    return (
        <div className="py-20">
            <SectionTitle title="Reviews" subtitle="What Our Clients Say" />
            <div className="mt-10 mx-auto text-center text-lg italic text-gray-700 overflow-hidden p-5">
                <div className="flex gap-8 animate-reviews-scroll">
                    {reviewsData.map((review, index) => (
                        <ReviewsCard
                            key={index}
                            imageSrc={review.imageSrc}
                            imageAlt={review.imageAlt}
                            name={review.name}
                            handle={review.handle}
                            review={review.review}
                        />
                    ))}
                    {reviewsData.map((review, index) => (
                        <ReviewsCard
                            key={`duplicate-${index}`}
                            imageSrc={review.imageSrc}
                            imageAlt={review.imageAlt}
                            name={review.name}
                            handle={review.handle}
                            review={review.review}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;