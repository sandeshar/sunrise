import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Quote from "./components/Quote";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Mission />
      <Gallery />
      <Services />
      <Quote />
      <Reviews />
      <Contact />
    </>
  );
}
