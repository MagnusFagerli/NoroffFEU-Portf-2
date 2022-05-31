import React from "react";
import Cards from "../portfolio/cards/Cards";
import Header from "../headers/Header";
import iphoneView from "../../images/iphoneView.png";
import selfie from "../../images/selfie.png";

function Home() {
  return (
    <>
      <div className="homeIntro">
        <Header>Test</Header>
      </div>
      <div className="homeCards">
        <Cards
          header="Hello, I'm Magnus!"
          image={selfie}
          p="Front End Developer from Oslo, Norway. Currently working at Norges Automobil Forbund (NAF) as a Front End Developer.
        I'm passionate about creating beautiful and functional websites and applications."
          href="https://github.com/MagnusFagerli"
        />
        <Cards
          header="Currently working on..."
          image={iphoneView}
          p="Currently working on our Membership App at NAF, which is created with React Native and Typescript."
          href="https://medlemsapp.naf.no/"
        />
      </div>
    </>
  );
}

export default Home;
