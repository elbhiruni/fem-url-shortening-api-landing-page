// Components
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import StatisticSection from "./components/StatisticSection";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Shorten />
        <StatisticSection />
        <Boost />
      </main>
      <Footer />
    </>
  );
}

export default App;
