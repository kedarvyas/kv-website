import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import image from "./assets/newme.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am a recent graduate from the {" "} <b>University of Tennessee</b> with a degree in <b>Computer Engineering</b>.
      </p>
    );
    const two = (
      <p>
        My interests include <b>software engineering</b>, <b>frontend development</b>, <b>ui/ux</b>, and{" "}
        <b>web design</b>. In my free time, my interests include sports, tech, music, and playing video games.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:kvyas1@vols.utk.edu">
          kvyas1@vols.utk.edu
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "HTML & CSS",
      "C++",
      "JavaScript",
      "Python",
      "ReactJS",
      "Node.js",
      "Git",
      "Windows, MacOS, Unix"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    //var image = require("./assets/me.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"programming skills and operating systems:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
