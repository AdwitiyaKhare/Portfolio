import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Content from "../components/Content/Content.jsx";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Projects");

  return (
    <div className="app-container">
      <Sidebar setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
    </div>
  );
}
