import React from "react";
import Button from "react-bootstrap/Button";
import Header from "../headers/Header";
import JSCA from "../../images/jscaimage.png";
import MintSneaks from "../../images/mintsneaksimage.png";
import Holidaze from "../../images/holidazeimage.png";
import Cards from "./cards/Cards";

function Projects() {
  return (
    <>
      <Header>Projects</Header>
      <Cards
        header="JS Frameworks 2 CA"
        image={JSCA}
        alt="car"
        p={
          "JavaScript Frameworks 2 Course Assignment. Project with API calls and params. "
        }
        href="https://github.com/MagnusFagerli/js-frameworks-course-assignment-MagnusFagerli-main"
      />
      <div className="linkButton">
        <Button
          variant="primary"
          href="https://chic-meringue-3ba859.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          View Live
        </Button>
      </div>
      <Cards
        header="MintSneaks"
        image={MintSneaks}
        alt="Car"
        p={
          "Semester Project 2. E-commerce site with Strapi CMS. Predefined products and admin login provided by Noroff."
        }
        href="https://github.com/MagnusFagerli/MintSneaks"
      />
      <div className="linkButton">
        <Button variant="disabled">View Live</Button>
      </div>
      <Cards
        header="Holidaze"
        image={Holidaze}
        alt="car"
        p={
          "Project Exam of 2022. Hotel booking website with JWT tokens for admin login, add/edit accommodations for the WordPress CMS."
        }
        href="https://github.com/Noroff-FEU-Assignments/project-exam-2-MagnusFagerli"
      />
      <div className="linkButton">
        <Button
          variant="primary"
          href="https://splendorous-bubblegum-75fb71.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          View Live
        </Button>
      </div>
    </>
  );
}

export default Projects;
