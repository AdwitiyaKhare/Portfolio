import { useState } from "react";
import emailjs from "emailjs-com";
import "./SidebarRight.css";
import Button from "./Button.jsx";

export default function SidebarRight() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setIsSending(true);
    setStatus("");

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("❌ Failed to send message. Try again later.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="sidebar-right">
      <div className="contact-heading">Get in Touch</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={isSending}>
          <Button btnTitle={isSending ? "Sending..." : "Send Message"} />
        </button>

        {status && (
          <div
            className={
              status.includes("✅") ? "success-message" : "error-message"
            }
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
}
