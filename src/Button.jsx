import "./Button.css";

export default function Button({ btnTitle, onClick }) {
  return (
    <div className="btn" onClick={onClick}>
      {btnTitle}
    </div>
  );
}
