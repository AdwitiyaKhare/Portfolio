import { useState } from "react";
import Content from "../components/Content/Content.jsx";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Projects");

  return (
    <div className="app-container">
      <Content activeSection={activeSection} />
    </div>
  );
}
