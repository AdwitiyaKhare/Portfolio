import Button from "./Button.jsx";
import "./Sidebar.css";
import SidebarTop from "./SidebarTop.jsx";
import SidebarFooter from "./SidebarFooter.jsx";

export default function Sidebar({ setActiveSection }) {
  const sections = [
    "About",
    "Skills",
    "Projects",
    "Coding Profiles",
    "Contact",
  ];

  return (
    <div className="sidebar">
      <SidebarTop />

      <div className="sidebar-buttons">
        {sections.map((sec, idx) => (
          <Button
            key={idx}
            btnTitle={sec}
            onClick={() => setActiveSection(sec)}
          />
        ))}
      </div>

      <SidebarFooter />
    </div>
  );
}
