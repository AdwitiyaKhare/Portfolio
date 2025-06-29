import Card from "./Card.jsx";
import {
  FaUser,
  FaCode,
  FaDatabase,
  FaBrain,
  FaProjectDiagram,
  FaLaptopCode,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

export default function Content({ activeSection }) {
  const openLink = (url) => window.open(url, "_blank");

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return (
          <div>
            <Card
              title="About Me"
              content="B.Tech student in Mathematics and Computing from MITS Gwalior. Proficient in AI/ML, Web Development, and Problem Solving. Strong foundation in computer science with an emphasis on building scalable and efficient solutions."
              icon={<FaUser />}
            />
          </div>
        );

      case "Skills":
        return (
          <div>
            <Card
              title="Programming Languages"
              content="C, C++, Python, Java, SQL"
              icon={<FaCode />}
            />
            <Card
              title="Web Development"
              content="HTML, CSS, JavaScript, React.js, Flask, Node.js, Express.js"
              icon={<FaLaptopCode />}
            />
            <Card
              title="Databases"
              content="MongoDB, MySQL"
              icon={<FaDatabase />}
            />
            <Card
              title="Deep Learning"
              content="PyTorch, CNNs, Model Optimization"
              icon={<FaBrain />}
            />
            <Card
              title="Tools & Platforms"
              content="NumPy, Matplotlib, PIL, Google Colab, Git, GitHub"
              icon={<FaCode />}
            />
          </div>
        );

      case "Projects":
        return (
          <div>
            <Card
              title="Image Classification of Indian Food Dishes"
              content={`<ul><li>Built a CNN model for classifying Indian food dishes with high accuracy.</li><li>Integrated with a Flask-based web app for real-time predictions.</li><li>Tools: Python, PyTorch, Flask, Google Colab.</li></ul>`}
              icon={<FaProjectDiagram />}
              onClick={() =>
                openLink("https://github.com/AdwitiyaKhare/food-classifier")
              }
            />
            <Card
              title="Wanderlust – Full Stack Travel Review Web App"
              content={`<ul><li>Built a full-stack Node.js and Express web application for listing, reviewing, and managing travel destinations (Airbnb-like clone).</li><li>Implemented user authentication (Passport.js), session management (connect-mongo), flash messages, and RESTful routing.</li><li>Used MongoDB with Mongoose for storage and retrieval.</li><li>Deployed on Render with a MongoDB Atlas backend.</li><li>Features: User registration/login, image uploads (Multer), API routes, CRUD reviews, and responsive EJS frontend.</li></ul>`}
              icon={<FaGlobe />}
              onClick={() =>
                openLink("https://wanderlust-8lw3.onrender.com/listings")
              }
            />
          </div>
        );

      case "Coding Profiles":
        return (
          <div>
            <Card
              title="LeetCode"
              content="Solved 500+ problems and earned the 365 Days Badge for problem-solving consistency."
              icon={<FaCode />}
              onClick={() => openLink("https://leetcode.com/u/adwitiyakhare/")}
            />
            <Card
              title="GitHub"
              content="Visit my GitHub profile to explore my projects and contributions."
              icon={<FaGithub />}
              onClick={() => openLink("https://github.com/AdwitiyaKhare")}
            />
          </div>
        );

      case "Contact":
        return (
          <div>
            <Card
              title="Email"
              content="adwitiyakhare222004@gmail.com"
              icon={<FaEnvelope />}
            />
            <Card
              title="Phone"
              content="+91 9993256153"
              icon={<FaEnvelope />}
            />
            <Card
              title="Location"
              content="Gwalior, Madhya Pradesh, India"
              icon={<FaMapMarkerAlt />}
            />
            <Card
              title="LinkedIn"
              content="Connect with me on LinkedIn."
              icon={<FaLinkedin />}
              onClick={() => openLink("https://linkedin.com/in/adwitiyakhare")}
            />
          </div>
        );

      default:
        return <h2>Section Not Found!</h2>;
    }
  };

  return <div className="content-section">{renderSection()}</div>;
}
