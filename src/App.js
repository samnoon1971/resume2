import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

//Components
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Form from "./components/Contact/Contact";
import Contest from "./components/Contest/Contest";
import Footer from "./components/Footer/Footer";

class App extends Component {
  componentDidMount() {
    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
      delay: 100,
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Skills />
      
        <Contest />
        <Form />
        <Footer />
      </div>
    );
  }
}
export default App;