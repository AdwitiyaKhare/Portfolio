import { useEffect, useState } from "react";

export default function SidebarFooter() {
  const [quote, setQuote] = useState("Loading today's quote...");
  const [lastLogin, setLastLogin] = useState("");

  useEffect(() => {
    const today = new Date().toDateString();
    const cachedQuote = localStorage.getItem("quoteOfTheDay");
    const cachedDate = localStorage.getItem("quoteDate");

    if (cachedQuote && cachedDate === today) {
      setQuote(cachedQuote);
    } else {
      const url =
        "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://zenquotes.io/api/today");

      fetch(url)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          try {
            const parsedData = JSON.parse(data.contents);
            if (
              parsedData &&
              parsedData[0] &&
              parsedData[0].q &&
              parsedData[0].a
            ) {
              const formattedQuote = `"${parsedData[0].q}" — ${parsedData[0].a}`;
              setQuote(formattedQuote);
              localStorage.setItem("quoteOfTheDay", formattedQuote);
              localStorage.setItem("quoteDate", today);
            } else {
              setQuote("No quote found today.");
            }
          } catch (e) {
            console.error("Error parsing quote data:", e);
            setQuote("Failed to parse quote.");
          }
        })
        .catch((error) => {
          console.error("Error fetching quote:", error);
          setQuote("Failed to load quote.");
        });
    }

    // Set Last Login Time (current time)
    const now = new Date();
    const formattedLastLogin = `Last login: ${now.toDateString()} ${now.toLocaleTimeString(
      "en-GB",
      {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }
    )}`;
    setLastLogin(formattedLastLogin);
  }, []);

  return (
    <div className="sidebar-footer">
      <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
        Quote of the Day:
      </p>
      <p style={{ fontSize: "0.75rem", opacity: 0.7, marginBottom: "1rem" }}>
        {quote}
      </p>
      <p style={{ fontSize: "0.7rem", opacity: 0.6 }}>{lastLogin}</p>
    </div>
  );
}
