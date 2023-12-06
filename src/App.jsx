
import alan from "./assets/alan.png";
import neil from "./assets/Neil.png";
import brian from "./assets/brian.png";
import frank from "./assets/frank.png";

const subtext = ["Legends","Icons","Innovators","Revolutionaries"];

function getRandomWord(){
  return Math.floor(Math.random() * subtext.length);
}

function Header() {
  const words = subtext[getRandomWord()];
  return ( <header>
    <img src={neil} alt="Neil Gaiman" />
    <img src={brian}  alt="Brian K. Vaughan" />
    <img src={alan}  alt="Alan Moore" />
    <img src={frank}  alt="Frank Miller" />
    <h1>Graphic Novel Legends</h1>
    <p>
      {words} Of The Genre
    </p>
  </header>
  );
}

// function CoreConcept(){

// }

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
