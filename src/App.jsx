import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
//import Bot from "./components/Bot";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Bot /> */}
      <Home />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
