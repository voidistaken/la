import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
const Home = () => {
  return (
    <div className="  md:overflow-visible  overflow-clip">
      <Hero  />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
