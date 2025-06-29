import "./Card.css";

export default function Card({ title, content, icon, onClick }) {
  return (
    <div className={`card ${onClick ? "clickable" : ""}`} onClick={onClick}>
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </div>
  );
}
