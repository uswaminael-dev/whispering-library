import Hero from "../components/hero/Hero";
import FeaturedBooks from "../components/books/FeaturedBooks";
import DailyDiscovery from "../components/discovery/DailyDiscovery";
import ReaderStats from "../components/stats/ReaderStats";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedBooks />
      <DailyDiscovery />
      <ReaderStats />
      <Footer />
    </>
  );
}