import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";

import { Header, About, Work, Skills, Testimonial, Footer } from "./containers";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
