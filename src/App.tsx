
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main>
        <Hero id="home"/>
        <Features id="features" />
        <Testimonials id="testimonials"/>
        <Pricing id="pricing"/>
        <Footer/>
      </main>
     
    </div>
  );
}