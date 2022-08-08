import './About.css'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = () => {
  return (
    <main className="about">
      <h1>
        Hi, I am <span className="name">Vincent Choy.</span>
      </h1>
      <h2>A Front End Developer.</h2>
      <p className="desc">
        I graduated from the Univeristy of Alberta with a degree in Civil
        Engineering and alumni of the accredited Lighthouse Labs bootcamp!
        <br></br>
        My passion is <strong className="name">front end development.</strong>
      </p>
      <div className="about-contact-center">
        <a href={"https://resume.creddle.io/resume/cdt4ump48qv"}>
          <span type="button" className="btn btn--outline">
            Resume
          </span>
        </a>
        <a
          href={"https://github.com/VincentHChoy"}
          aria-label="github"
          className="link-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href={"https://www.linkedin.com/in/vincent-choy/"}
          aria-label="linkedin"
          className="link-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </main>
  );
}

export default About;