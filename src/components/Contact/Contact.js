import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";




function Contact() {
  return (
    <section className="">
      <a id="contact">
        <h2 className="section-title">Contact me!</h2>
      </a>
      <div className="main-container">
        <img className="me" src={"/me.jpg"} />
        <ul className="contact-info">
          <li>
            <a>
            <FontAwesomeIcon icon={faPhone} size="2x" /> (780) 200-5180
            </a>
          </li>
          <li>
            <a href="mailto: vincenthchoyy@gmail.com">
            <FontAwesomeIcon icon={faMailBulk} size="2x" />{" "}
            vincenthchoyy@gmail.com
            </a>
          </li>
          <li>
            <a href={"https://github.com/VincentHChoy"} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />{" "}
            github.com/VincentHChoy
            </a>
          </li>
          <li>
            <a href={"https://www.linkedin.com/in/vincent-choy/"} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />{" "}
            linkedin.com/in/vincent-choy/
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Contact;