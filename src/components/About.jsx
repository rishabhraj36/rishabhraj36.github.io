import React, { useEffect } from "react";
import resume from "../assets/resume/Rishabh Raj-Full Stack Web Developer.pdf"
import AOS from "aos";

export default function About() {

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1Z50ka2T2Mt1MSYljlltn4SAGsIwGKV8K/view?usp=sharing", '_blank');
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce">About Me</span>
      </h1>
      <div>
        <div data-aos="fade-up" className=" first">
          <p id="user-detail-intro">
          Welcome to my coding realm, where I transform your ideas into lines of code! <p style={{ display: 'inline-block' }} className="sauce">I'm Rishabh</p>
          , a full-stack web developer with a flair for creating stunning and user-friendly websites. I have extensive experience in working with HTML5, CSS3, JavaScript, ReactJs, NodeJs, Express, MongoDB, Tailwind, Vite, and Firebase. I enjoy applying my skills and knowledge to solve complex coding problems and deliver high-quality web solutions. I am always eager to learn new technologies and explore the latest trends in the digital world. Coding is my passion, but I also love to read books and articles that keep me updated on the latest technology trends and innovations
            <br />
          </p>
          <br />

        </div>
        <a 
        onClick={handleDownload} 
        rel="noreferrer" href={resume} download={"Rishabh Raj-Full Stack Web Developer"} id="resume-button-2" className="contact-button resume-button second-btn">
          Resume</a>
      </div>
    </section>
  );
}
