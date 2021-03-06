import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Introduction from "./components/Introduction/Introduction";
import AboutMe from "./components/AboutMe/AboutMe";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Introduction />
      <AboutMe />
      <MyPortfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
