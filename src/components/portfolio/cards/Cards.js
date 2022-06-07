import React from "react";
import Header from "../../headers/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function Cards(props) {
  return (
    <div className="cards">
      <div className="headerContent">
        <Header>{props.header}</Header>
      </div>
      <img src={props.image} alt={props.alt} className="projectImage"></img>
      <div className="cardsText">
        <p>{props.p}</p>
      </div>
      <div className="links">
        <a href={props.href} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faCodeBranch} /> Github
        </a>
      </div>
    </div>
  );
}

export default Cards;
