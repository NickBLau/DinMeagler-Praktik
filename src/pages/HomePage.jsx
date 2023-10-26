import styled from "styled-components";
import React from "react";
import NavMenu from "../templates/NavMenu";
import FooterMenu from "../templates/FooterMenu";
import Hero from "../templates/Hero";
import AboutUs from "../templates/AboutUs";
import UdvalgteBoliger from "../components/UdvalgteBoliger";
import NewsLetters from "../components/NewsLetter";
import OurApp from "../components/OurApp";
import OurWorkers from "../components/OurWorkers";
import HookForm from "../components/HookForm";
import Test from "../components/Test";
import ExampleComponent from "../components/ExampleComponent";

const HomePage = () => {
  return (
    <>
      <NavMenu></NavMenu>
      {/* <LightBox></LightBox> */}
      {/* <Test></Test>{" "} */}
      <main>
        <Hero></Hero>
      </main>
      <AboutUs></AboutUs>
      <UdvalgteBoliger></UdvalgteBoliger>
      <NewsLetters></NewsLetters>
      <OurWorkers></OurWorkers>
      <OurApp></OurApp>
      <FooterMenu></FooterMenu>
    </>
  );
};

export default HomePage;
