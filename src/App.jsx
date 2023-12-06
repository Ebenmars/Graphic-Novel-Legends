
import { BIOS } from "./data.js";

const subtext = ["Legends", "Icons", "Innovators", "Revolutionaries"];

function getRandomWord() {
  return Math.floor(Math.random() * subtext.length);
}

const words = subtext[getRandomWord()];

function Header() {

  return (<header>
    <img src={BIOS[0].image} alt="Alan Moore" />
    <img src={BIOS[1].image} alt="Neil Gaiman" />
    <img src={BIOS[2].image} alt="Brian K. Vaughan" />
    <img src={BIOS[3].image} alt="Frank Miller" />
    <h1>Graphic Novel Legends</h1>
    <p>
      {words} Of The Genre
    </p>
  </header>
  );
}

function Bios(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="bios">
          <h2>{words}</h2>
          <ul>
            <Bios title={BIOS[0].title}
              description={BIOS[0].description}
              image={BIOS[0].image}
            ></Bios>
            <Bios
              title={BIOS[1].title}
              description={BIOS[1].description}
              image={BIOS[1].image}
            ></Bios>
            <Bios
              title={BIOS[2].title}
              description={BIOS[2].description}
              image={BIOS[2].image}
            ></Bios>
            <Bios
              title={BIOS[3].title}
              description={BIOS[3].description}
              image={BIOS[3].image}
            ></Bios>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
