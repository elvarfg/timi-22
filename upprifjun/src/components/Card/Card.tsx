import "./styles.css";

export default function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="cardContainer">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
