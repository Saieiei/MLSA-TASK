/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Sairudra More",
  title: "Computer Science Enginner",
  email: "sairudra.more@studentambassadors.com",
  gitHub: "https://github.com/Saieiei",
  instagram: "https://www.instagram.com/sairudra60/",
  linkedIn: "https://www.linkedin.com/in/sairudra-more/",
  medium: "",
  twitter: "https://twitter.com/Sai69962665",
  youTube: "https://www.youtube.com/channel/UCuMiKFxdmvuTYGLTOJZ9_wA",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
