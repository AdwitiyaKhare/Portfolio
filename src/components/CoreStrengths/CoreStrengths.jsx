import "./CoreStrengths.css";
import { FaCode, FaServer, FaRobot, FaRocket } from "react-icons/fa";

export default function CoreStrengths() {
  return (
    <div className="core-strengths-card">
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
  );
}
