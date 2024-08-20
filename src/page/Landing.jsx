/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import Navbar from "../components/Navbar";
import { CarouselDefault } from "../components/CarouselDefault";
import Services from "../components/Services";
import Contact from "../components/Contact";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";
import About from "../components/About";
import GoogleReviews from "../components/GoogleReviews";

const Landing = () => {
  return (
    <div>
      <div id="contact">
        <Contact />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="carousel">
        <CarouselDefault />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonials">
        <GoogleReviews />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
