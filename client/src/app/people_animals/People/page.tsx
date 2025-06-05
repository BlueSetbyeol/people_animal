import PeopleCards from "@/app/UI/PeopleCards";
import data from "./../../../data.json";

export default function People() {
  const people = data.persons;
  return (
    <article className="showcase">
      <h2>Nos membres</h2>
      <section className="card-show">
        {people &&
          people.map((person) => (
            <div key={person.id}>
              <PeopleCards
                firstname={person.firstName}
                lastname={person.lastName}
              />
            </div>
          ))}
      </section>
    </article>
  );
}
