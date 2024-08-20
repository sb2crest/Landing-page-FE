// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./page/Landing";
import Services from "./components/Services";
import Contact from "./components/Contact";
import TestimonialSlider from "./components/TestimonialSlider";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<TestimonialSlider />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
