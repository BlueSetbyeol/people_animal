import AnimalCards from "@/app/UI/AnimalCards";
import data from "./../../../data.json";

export default function Animal() {
  const animals = data.animals;
  return (
    <article className="showcase">
      <h2>Nos membres</h2>
      <section className="card-show">
        {animals &&
          animals.map((friend) => (
            <div key={friend.id}>
              <AnimalCards name={friend.name} breed={friend.breed} />
            </div>
          ))}
      </section>
    </article>
  );
}
