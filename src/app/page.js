import ExclusiveOffers from "@/components/ExclusiveOffers";
import FeaturedDestination from "@/components/FeaturedDestination";
// import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HotelRegistration from "@/components/HotelRegistration";
// import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      {false && <HotelRegistration/>}
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial />
      <NewsLetter/>
      {/* <Footer/> */}
    </>
  );
}
