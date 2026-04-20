import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from 'gsap/React';

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "BISMAN Online",
    category: "US Marketplace",
    tools: "React.js, React Native, Firebase",
    description: "Full-featured marketplace platform for Bismarck, ND community with auth, product search & real-time chat.",
  },
  {
    title: "TraderHeros",
    category: "Service Platform",
    tools: "Next.js, React.js, MySQL",
    description: "Platform connecting users with local service professionals. Reusable components and lead tracking features.",
  },
  {
    title: "Madraj",
    category: "Travel Booking",
    tools: "Vue.js, Apache Cordova",
    description: "Travel booking platform admin dashboard maintenance and feature enhancements including package management.",
  },
  {
    title: "BISMAN Mobile",
    category: "Mobile App",
    tools: "React Native, Firebase",
    description: "Cross-platform mobile app for BISMAN marketplace with product listings, authentication and payment flows.",
  },
  {
    title: "TraderHeros Dashboard",
    category: "Web App",
    tools: "Next.js, React.js",
    description: "Trade dashboard with SMS notification interfaces and reusable React component architecture.",
  },
  {
    title: "Freelance Projects",
    category: "WordPress / Shopify",
    tools: "WordPress, Elementor, Shopify",
    description: "20+ custom websites and Shopify theme customizations for small businesses across various industries.",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", opacity: 0.7 }}>{project.description}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
