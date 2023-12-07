
import alan from "/src/assets/alan.png";
import neil from "/src/assets/Neil.png";
import brian from "/src/assets/brian.png";
import frank from "/src/assets/frank.png";
import "./Header.css";

const subtext = ["Legends", "Icons", "Innovators", "Revolutionaries"];

function getRandomWord() {
  return Math.floor(Math.random() * subtext.length);
}


export default function Header() {
    const words = subtext[getRandomWord()];
    return (<header>
      <img src={alan} alt="Alan Moore" />
      <img src={neil} alt="Neil Gaiman" />
      <img src={brian} alt="Brian K. Vaughan" />
      <img src={frank} alt="Frank Miller" />
      <h1>Graphic Novel Legends</h1>
      <p>
        {words} Of The Genre
      </p>
    </header>
    );
  }