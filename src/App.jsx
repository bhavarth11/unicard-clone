import "./App.css";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";
import Assurance from "./components/Assurance/Assurance";
import Footer from "./components/Footer/Footer";
import DownloadAndDisclaimer from "./components/DownloadAndDisclaimer/DownloadAndDisclaimer";

function App() {
  return (
    <div>
      <HeroVideo />
      <HowItWorks />
      <Features />
      <Assurance />
      <DownloadAndDisclaimer />
      <Footer />
    </div>
  );
}

export default App;
