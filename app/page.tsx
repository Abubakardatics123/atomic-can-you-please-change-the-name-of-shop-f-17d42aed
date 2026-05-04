import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import DealsBanner from "@/components/DealsBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Categories />
      <FeaturedProducts />
      <DealsBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
