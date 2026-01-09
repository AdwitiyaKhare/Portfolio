import Card from "../Card/Card.jsx";
import ProfileCard from "../ProfileCard/ProfileCard.jsx";
import "./Content.css";
import SidebarRight from "../Sidebar/SidebarRight.jsx";
import {
  FaUser,
  FaCode,
  FaDatabase,
  FaBrain,
  FaProjectDiagram,
  FaLaptopCode,
  FaEnvelope,
  FaGithub,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGlobe,
  FaCertificate,
} from "react-icons/fa";

export default function Content() {
  const openLink = (url) => window.open(url, "_blank");

  return (
    <div className="content-wrapper">
      {/* Profile Section */}
      <ProfileCard />
      <section id="About">
        <h2>About</h2>
        <Card
          title="About Me"
          content="Software Engineer (B.Tech, 2026) with proven experience in designing and deploying scalable, production-grade web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Strong in cross-functional collaboration, REST API design, and integrating AI-powered workflows into full-stack systems. Focused on building impactful digital products, optimizing performance through data-driven approaches, and contributing to agile engineering teams that deliver measurable growth and efficiency."
          icon={<FaUser />}
        />
      </section>

      {/* Skills Section */}
      <section id="Skills">
        <h2>Skills</h2>

        <Card
          title="Programming Languages"
          content="C, C++, Python, Java, JavaScript (ES6+), TypeScript, SQL"
          icon={<FaCode />}
        />

        <Card
          title="Frontend Development"
          content="HTML5, CSS3, React.js, Next.js, EJS, Tailwind CSS"
          icon={<FaLaptopCode />}
        />

        <Card
          title="Backend & APIs"
          content="Node.js, Express.js, RESTful APIs, GraphQL, Flask"
          icon={<FaProjectDiagram />}
        />

        <Card
          title="Databases"
          content="MongoDB, MySQL, PostgreSQL, SQL / NoSQL Databases"
          icon={<FaDatabase />}
        />

        <Card
          title="AI / Machine Learning"
          content="PyTorch, CNNs, LangChain, LangGraph, Model Optimization"
          icon={<FaBrain />}
        />

        <Card
          title="Tools & Platforms"
          content="Git, GitHub, Docker, Postman, CI/CD Pipelines, Render, Vercel, Netlify, Google Colab"
          icon={<FaCode />}
        />
      </section>

      {/* Projects Section */}
      <section id="Projects">
        <h2>Projects</h2>

        <Card
          title="Wanderlust – Full Stack Travel Review Web App"
          content={`<ul>
      <li>Built a full-stack Node.js and Express web application for listing, reviewing, and managing travel destinations (Airbnb-like clone).</li>
      <li>Implemented user authentication (Passport.js), session management (connect-mongo), flash messages, and RESTful routing.</li>
      <li>Used MongoDB with Mongoose for storage and retrieval.</li>
      <li>Deployed on Render with a MongoDB Atlas backend.</li>
      <li>Features: User registration/login, image uploads (Multer), API routes, CRUD reviews, and responsive EJS frontend.</li>
    </ul>`}
          icon={<FaGlobe />}
          onClick={() =>
            openLink("https://wanderlust-8lw3.onrender.com/listings")
          }
        />

        <Card
          title="StripeMart – Full Stack E-Commerce Application"
          content={`<ul>
      <li>Developed a full-stack e-commerce platform with secure authentication and payment processing.</li>
      <li>Integrated Google OAuth for login and Stripe for real-time payments.</li>
      <li>Implemented order management, purchase tracking, and EmailJS-based email notifications.</li>
      <li>Built a responsive UI with light/dark mode and deployed frontend on Vercel.</li>
      <li>Tech Stack: React, Node.js, Express, MongoDB, Stripe, Google OAuth.</li>
    </ul>`}
          icon={<FaShoppingCart />}
          onClick={() => openLink("https://stripemart.vercel.app/")}
        />

        <Card
          title="Image Classification of Indian Food Dishes"
          content={`<ul>
      <li>Built a CNN model for classifying Indian food dishes with high accuracy.</li>
      <li>Integrated with a Flask-based web app for real-time predictions.</li>
      <li>Tools: Python, PyTorch, Flask, Google Colab.</li>
    </ul>`}
          icon={<FaProjectDiagram />}
          onClick={() =>
            openLink("https://github.com/AdwitiyaKhare/food-classifier")
          }
        />
      </section>

      {/* Certifications Section */}
      <section id="Certifications">
        <h2>Certifications</h2>

        <Card
          title="Ethical Hacking (NPTEL – IIT Kharagpur)"
          content="Elite NPTEL certification covering ethical hacking techniques, network security, vulnerability analysis, and cyber attack prevention. (Jul–Oct 2025)"
          icon={<FaCertificate />}
          onClick={() =>
            openLink(
              "https://drive.google.com/file/d/16jVaQ22Sky7pxfm7aoaJ-BWQSYW0VGtf/view"
            )
          }
        />

        <Card
          title="Deep Learning (NPTEL – IIT Ropar)"
          content="Elite certification focused on neural networks, CNNs, backpropagation, optimization techniques, and deep learning model training. (Jul–Oct 2025)"
          icon={<FaCertificate />}
          onClick={() =>
            openLink(
              "https://drive.google.com/file/d/1HnUDtwS2dnlMbdwHCWQiKyvw9VeqrItw/view"
            )
          }
        />

        <Card
          title="Cloud Computing (NPTEL – IIT Kharagpur)"
          content="Elite certification covering cloud computing fundamentals, virtualization, cloud service models (IaaS, PaaS, SaaS), and distributed systems. (Jan–Apr 2025)"
          icon={<FaCertificate />}
          onClick={() =>
            openLink(
              "https://drive.google.com/file/d/1Pa15s9iSxgtaBj3fOpUKG4B3VUDRVoe6/view"
            )
          }
        />
      </section>

      {/* Coding Profiles Section */}
      <section id="Coding Profiles">
        <h2>Coding Profiles</h2>

        <Card
          title="LeetCode"
          content="Solved 500+ problems and earned the 365 Days Badge for problem-solving consistency."
          icon={<FaCode />}
          onClick={() => openLink("https://leetcode.com/u/adwitiyakhare/")}
        />

        <Card
          title="Codeforces"
          content="Active competitive programmer with regular contest participation and strong problem-solving skills."
          icon={<FaCode />}
          onClick={() =>
            openLink("https://codeforces.com/profile/adwitiya_khare")
          }
        />

        <Card
          title="GitHub"
          content="Visit my GitHub profile to explore my projects and contributions."
          icon={<FaGithub />}
          onClick={() => openLink("https://github.com/AdwitiyaKhare")}
        />
      </section>

      {/* Contact Section */}
      <section id="Contact">
        <h2>Contact</h2>
        <Card
          title="Email"
          content="adwitiyakhare222004@gmail.com"
          icon={<FaEnvelope />}
        />
        <Card title="Phone" content="+91 9993256153" icon={<FaEnvelope />} />
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
      </section>
      <SidebarRight />
    </div>
  );
}
