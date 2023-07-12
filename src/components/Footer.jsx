import React from "react";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faInstagram, faLinkedin, faGithub,faHashnode,} from "@fortawesome/free-brands-svg-icons";
import { faHeart,faCode,faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      
        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/rshvraj">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rishabh-raj-b543b7242/">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li id="hashnode">
              <a target="_blank" rel="noreferrer" href="https://bootstrapnoob.hashnode.dev/">
              <FontAwesomeIcon icon={faHashnode} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/rshvraj">
            Designed and built by Rishabh{" "}
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
          <a href="mailto: rshvraj36@gmail.com" id="contact-email"><FontAwesomeIcon icon={faMailBulk}/> rshvraj36@gmail.com<hr /></a>
      </div>
    </footer>
  );
}
