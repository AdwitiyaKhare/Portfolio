import Button from "../Button/Button.jsx";
import "./Sidebar.css";
import SidebarTop from "./SidebarTop.jsx";
import SidebarFooter from "./SidebarFooter.jsx";

export default function Sidebar() {
  const sections = [
    "About",
    "Skills",
    "Projects",
    "Coding Profiles",
    "Contact",
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sidebar">
      <SidebarTop />
      <div className="sidebar-buttons">
        {sections.map((sec, idx) => (
          <Button
            key={idx}
            btnTitle={sec}
            onClick={() => scrollToSection(sec)}
          />
        ))}
      </div>
      <SidebarFooter />
    </div>
  );
}
