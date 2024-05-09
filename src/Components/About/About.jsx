import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image"></div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clints</h5>
                <small>10+ Worldwide</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>20+ Completed Projects</small>
              </article>
            </div>
            <p>
              With a passion for technology and a drive for innovation, I am a
              dedicated professional with expertise in front-end development and
              manual testing. Armed with years of experience in ensuring
              software quality and crafting intuitive user experiences, I thrive
              on challenges and strive for excellence in every project. From
              building robust web applications to conducting rigorous testing, I
              bring a blend of technical skills and creative problem-solving to
              the table. Let's collaborate and bring your ideas to life.
            </p>
            <a href="#Contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
