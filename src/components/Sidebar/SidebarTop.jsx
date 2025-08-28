import { useEffect, useState } from "react";
import "./SidebarTop.css";

export default function SidebarTop() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="sidebar-top">
      <p className="datetime">
        {formattedDate}
        <br />
        {formattedTime}
      </p>
      <p className="welcome-line">
        Welcome to Adwitiya's Portfolio
      </p>
    </div>
  );
}
