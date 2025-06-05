import "./Cards.css";

interface personProps {
  name: string;
  breed: string;
}

export default function AnimalCards({ name, breed }: personProps) {
  return (
    <article className="cards">
      <h3>{name} </h3>
      <p>{breed}</p>
    </article>
  );
}
