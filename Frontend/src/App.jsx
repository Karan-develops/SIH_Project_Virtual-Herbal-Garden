import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import Hero from "./components/Hero";
import Features from "./components/Features";
import a from "./assets/abc.png";
import b from "./assets/a.jpeg";
import c from "./assets/b.png";
import Marquee from "./components/Marquee";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <div className="flex ">
        <HomeCards content="Interactive Plant Guides" pic={a} />
        <HomeCards content="Educational Resources" pic={b} />
        <HomeCards content="Community Forum" pic={c} />
      </div>
      <div className="h-10"></div>
    </div>
  );
}

export default App;
