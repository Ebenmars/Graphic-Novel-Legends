import { BIOS } from "/src/data.js";
const subtext = ["Legends", "Icons", "Innovators", "Revolutionaries"];

function getRandomWord() {
  return Math.floor(Math.random() * subtext.length);
}


export default function Header() {
    const words = subtext[getRandomWord()];
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