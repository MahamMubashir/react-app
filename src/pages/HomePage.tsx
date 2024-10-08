import Banner from "../components/Banner";
import Categories from "../components/Categories";
import DivSection from "../components/DivSection";
import FreeLancersSection from "../components/FreeLancersSection";
import Header from "../components/Header";
import HowItWork from "../components/HowItWork";
import TipsGuideSection from "../components/TipsGuideSection";
import GrowCareerSection from "../components/GrowCareerSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <div className="">
        <div className="bg-[url('/src/assets/hero-backgound.jpg')] bg-cover ">
          <Header />
          <Banner />
        </div>
        <DivSection />
        <FreeLancersSection />
      </div>
      <Categories />
      <HowItWork />
      <TipsGuideSection />
      <GrowCareerSection />
      <Footer />
    </>
  );
}

export default HomePage;
