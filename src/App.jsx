import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import "./App.css"; // Optional

export default function App() {
  const [activeSection, setActiveSection] = useState("Projects");

  return (
    <div className="app-container">
      <Sidebar setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
    </div>
  );
}
