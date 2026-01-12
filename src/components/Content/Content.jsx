import "./Content.css";
import Sidebar from "../Sidebar/SidebarLeft/Sidebar.jsx";
import SidebarRight from "../Sidebar/SidebarRight/SidebarRight.jsx";
import MainSections from "./MainSections.jsx";

export default function Content() {
  return (
    <div className="content-layout">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="content-main">
        <MainSections />
      </div>

      {/* RIGHT SIDEBAR */}
      <SidebarRight />
    </div>
  );
}
