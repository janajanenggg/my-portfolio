import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto px-4">
        {/* Add other sections here */}
      </div>
    </>
  );
};

export default Home;
