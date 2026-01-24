import CategoriesSection from "@/components/Landing/CategoriesSection";
import FeaturedProducts from "@/components/Landing/FeaturedProducts";
import HeroSection from "@/components/Landing/HeroSection";
import Newsletter from "@/components/Landing/Newsletter";
import OfferSection from "@/components/Landing/OfferSection";
import Testimonials from "@/components/Landing/Testimonials";
import WhyChooseUs from "@/components/Landing/WhyChooseUs";
import UserCard from "@/components/UserCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-black">
      
      {/* <UserCard></UserCard> */}
      <HeroSection></HeroSection>
      <CategoriesSection />
      <FeaturedProducts />
      <OfferSection />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
