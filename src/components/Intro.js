import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import Typical from "react-typical";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hello, "}
            <span className="intro-name">{"kedar"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">
            i am a{' '}
            <Typical className="intro-type"
              loop={3}
              wrapper="b"
              steps={[
                'developer.',
                1500,
                'problem solver.',
                750,
                'fast learner.',
                750,
                'tech enthusiast.',
                750,
                'sports fanatic.',
                750,
                'computer scientist.',
                5000
              ]}
            />
          </div>
          <div className="intro-desc">i code sometimes</div>
        </FadeInSection>
        <a
            href="mailto:kvyas1@vols.utk.edu"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" " + " "}
          </a>
      </div>
    );
  }
}

export default Intro;
