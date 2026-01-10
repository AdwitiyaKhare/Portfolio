import "./ProfileCard.css";
import me from "../../assets/me.png";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { FaCode, FaServer, FaRobot, FaRocket } from "react-icons/fa";

export default function ProfileCard() {
  const openLink = (url) => window.open(url, "_blank");

  return (
    <div className="profile-card-wrapper">
      <div className="profile-card">
        {/* Image */}
        <div className="profile-photo">
          <img src={me} alt="Adwitiya Khare" />
        </div>

        {/* Info */}
        <div className="profile-details">
          <h2>Adwitiya Khare</h2>
          <span className="status-badge">Open for Work</span>

          <div className="contact-list">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>adwitiyakhare222004@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 9993256153</span>
            </div>

            <div
              className="contact-item clickable"
              onClick={() => openLink("https://linkedin.com/in/adwitiyakhare")}
            >
              <FaLinkedin className="contact-icon" />
              <span>linkedin.com/in/adwitiyakhare</span>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="core-strengths">
          <h4>Core Strengths</h4>
          <ul>
            <li>
              <FaCode /> Full-Stack (MERN)
            </li>
            <li>
              <FaServer /> REST API Design
            </li>
            <li>
              <FaRobot /> AI Integration
            </li>
            <li>
              <FaRocket /> Deployment & Debugging
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
