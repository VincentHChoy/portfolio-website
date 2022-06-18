import "./Education.css";

const About = () => {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <div className="cred">
        <div className="container">
          <h3>Lighthouse Labs</h3>
          <a href="https://www.lighthouselabs.ca/">
            <img src="https://www.lighthouselabs.ca/uploads/testimonial/company_logo/32/lighthouselabs.jpg"></img>
          </a>
          <p>Web Development Flex Program</p>
          <p>Class of 2022</p>
        </div>
        <div className="container">
          <h3>University of Alberta</h3>
          <a href="https://www.ualberta.ca/engineering/civil-environmental-engineering/index.html">
            <img src="https://www.logolynx.com/images/logolynx/s_56/56cc62c5e545182fc993c149fddb6ac8.jpeg"></img>
          </a>
          <p>
            Bachelor of Science <br></br>
            <span className="name">Civil Engineering</span> <br></br>{" "}
            Enviromental Option <br></br> Co-op Program
          </p>
          <p>Class of 2020</p>
        </div>
      </div>
    </section>
  );
};

export default About;
