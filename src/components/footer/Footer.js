import React from "react";
import "./Footer.css";
import "./contact.css"
import { Fade } from "react-reveal";
// import "../../containers/skills/Skills.css";
import { greeting } from "../../portfolio.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";

/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const theme = props.theme;

  return (
    <div className="footer-div">
      <Fade>
        <h1 className="skills-header" style={{ color: theme.text }}> Contact Me
        </h1>

        <p className="skills-header2">
          FOR COLLABORATIONS / INVITATION FOR TECH TALKS / JOB OFFERS ONLY.
        </p>

        <div className="footer-text" style={{ color: props.theme.secondaryText }}>
          <p>avivish000@gmail.com</p>
        </div>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <SocialMedia theme={theme} />
          <br></br><br />
          Made with <span role="img">❤️</span> by {greeting.nickname}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
