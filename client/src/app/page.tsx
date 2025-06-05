import "./page.css";
import data from "./../data.json";
import PeopleCards from "./UI/PeopleCards";

export default function Home() {
  const people = data.persons;
  const animal = data.animals;

  const randomNum: number[] = [];

  function getRandomNumber() {
    for (let i = 0; randomNum.length < 12; i++) {
      let getNum = Math.floor(Math.random() * 1001);
      if (randomNum.includes(getNum)) {
        getNum = Math.floor(Math.random() * 1001);
      }
      randomNum.push(getNum);
      getNum = 0;
      i++;
    }
  }

  getRandomNumber();

  return (
    <>
      <h1>Bienvenue</h1>
      <section className="welcome">
        <article className="showcase">
          <h2>Les membres du jour</h2>
          <section className="card-show">
            {randomNum.length !== 0 &&
              randomNum.map((num) => (
                <div key={people[num].id}>
                  <PeopleCards
                    firstname={people[num].firstName}
                    lastname={people[num].lastName}
                  />
                </div>
              ))}
          </section>
        </article>
        <article className="showcase">
          <h2>Quelques compagnons</h2>
          <section className="card-show">
            {randomNum.length !== 0 &&
              randomNum.map((num) => (
                <div key={animal[num].id}>
                  <PeopleCards
                    firstname={animal[num].name}
                    lastname={animal[num].breed}
                  />
                </div>
              ))}
          </section>
        </article>
      </section>
    </>
  );
}
