import React from "react";
import img1 from "../assets/picture/Rishabh Headshot photo.png";
import Typewriter from "typewriter-effect";

export default function Intro({ handleClick, boolean }) {
  return (
    <div id="home" className="hero" onClick={() => {
        if (boolean === false) handleClick();
      }}>
      <div className="home-img-cont">
        <div class="outer-circle circle circle-1">
          <span class="sq sq-1"></span>
          <span class="inner-circle circle">
            <img className="home-img" src={img1} alt="personal" />
          </span>
          <span class="sq sq-2"></span>
        </div>
      </div>
      <div className="intro give-padding contain">
        <div className="txt-light-red twent">
          Hi<span className="wave">🙏</span>, I am
        </div>
        <div id="user-detail-name" className="newname">
          Rishabh
        </div>
        <div className="bio what-i-do">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I Code")
                .pause(2000)
                .deleteAll()
                .typeString("Frontend")
                .pause(2000)
                .deleteAll()
                .typeString("And Backend.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div>
          <div className="info">
          I am a developer👨‍💻 who loves to design and code web interfaces that are user-friendly and interactive. I work well with teams to plan and execute functional specifications for websites and applications.
          </div>
        </div>
        <div className="button-container">
          <a className="contact-button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
