import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Designed custom WordPress websites and Shopify theme customizations
              for small businesses. Built and maintained websites using Elementor
              and WP-Bakery while ensuring performance and usability. Managed
              client communication, requirements gathering, and project delivery.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Science</h4>
                <h5>Federal Urdu University, Islamabad</h5>
              </div>
              <h3>2019 – 2024</h3>
            </div>
            <p>
              Completed a Bachelor's degree in Computer Science, building a strong
              foundation in software engineering principles, algorithms, and modern
              web technologies that underpin my frontend development expertise.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer (React.js / React Native)</h4>
                <h5>Organix-IT, Islamabad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Develop and maintain web and mobile applications using React.js and
              React Native for international clients including the US-based
              marketplace BISMAN Online. Collaborate with backend teams to integrate
              REST APIs, implement responsive UI components, and translate Figma
              designs into pixel-perfect components — reducing load times by ~30%
              and UI bugs by 25%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
