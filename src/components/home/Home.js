import React from "react";
import Cards from "../portfolio/cards/Cards";
import IphoneView from "../../images/iphoneView.png";
import Selfie from "../../images/selfie.png";

function Home() {
  return (
    <>
      <div className="homeCardsContainer">
        <Cards
          className="homeCard"
          header="Hello, I'm Magnus!"
          image={Selfie}
          p="Front End Developer from Oslo, Norway. Currently working at Norges Automobil Forbund (NAF) as a Front End Developer.
          I'm passionate about creating beautiful and functional websites and applications."
          href="https://github.com/MagnusFagerli"
        />
        <Cards
          className="homeCard"
          header="Currently working on..."
          image={IphoneView}
          p="Currently working on our Membership App at NAF, which is created with React Native and Typescript."
          href="https://medlemsapp.naf.no/"
        />
      </div>
    </>
  );
}

export default Home;
