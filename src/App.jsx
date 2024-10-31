import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Banner from './components/Banner/Banner';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Programs />
      <Banner />
    </main>
  );
};

export default App;