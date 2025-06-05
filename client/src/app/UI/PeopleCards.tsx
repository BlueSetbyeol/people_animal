import "./Cards.css";

interface personProps {
  firstname: string;
  lastname: string;
}

export default function PeopleCards({ firstname, lastname }: personProps) {
  return (
    <article className="cards">
      <h3>{firstname} </h3>
      <p>{lastname}</p>
    </article>
  );
}
