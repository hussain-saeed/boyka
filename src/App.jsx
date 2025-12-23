import Header from "./components/Header";
import "./index.css";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg)", position: "relative" }}>
        <Header />
        <Hero />
        <img
          src="/images/hero-right-ellipse.png"
          alt="hero-right-ellipse"
          className="absolute -top-30 -right-30 lg:-top-100 lg:-right-120 z-0"
        />
      </div>
    </>
  );
}

export default App;
