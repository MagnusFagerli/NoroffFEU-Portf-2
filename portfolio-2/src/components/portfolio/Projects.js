import React from "react";
import Button from "react-bootstrap/Button";
import Header from "../headers/Header";
import JSCA from "../../images/jscaimage.png";
import Cards from "./cards/Cards";
import Car from "../../images/test.jpeg";

function Projects() {
  return (
    <>
      <Header>Projects</Header>
      <Cards
        header="JS Frameworks 2 CA"
        image={JSCA}
        alt="car"
        p={"JavaScript Frameworks 2 Course Assignment. "}
        href="https://github.com/MagnusFagerli/js-frameworks-course-assignment-MagnusFagerli-main"
      />
      <div className="linkButton">
        <Button
          variant="primary"
          href="https://www.tek.no"
          target="_blank"
          rel="noreferrer"
        >
          View Live
        </Button>
      </div>
      <Cards
        header="MintSneaks"
        image={Car}
        alt="Car"
        p={
          "Semester Project 2. E-commerce site with Strapi CMS. Predefined products and admin login provided by Noroff."
        }
        href="https://www.vg.no"
      />
      <div className="linkButton">
        <Button variant="disabled">View Live</Button>
      </div>
      <Cards
        header="Holidaze"
        image={Car}
        alt="car"
        p={
          "Project Exam of 2022. Hotel booking website with JWT tokens for admin login, add/edit accommodations for the WordPress CMS."
        }
        href="https://www.yr.no"
      />
      <div className="linkButton">
        <Button
          variant="primary"
          href="https://www.tek.no"
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
