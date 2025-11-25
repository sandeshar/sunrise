import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Quote from "./components/Quote";
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
    </>
  );
}
