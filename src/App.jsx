import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import Programs from './components/Programs/Programs';
import Admissions from './components/Admissions/Admissions';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Banner />
      <Programs />
      <Admissions />
      <Footer />
    </main>
  );
};

export default App;