import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

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
