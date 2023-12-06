
const subtext = ["Legends","Icons","Innovators","Revolutionaries"];

function getRandomWord(){
  return Math.floor(Math.random() * subtext.length);
}

function Header() {
  const words = subtext[getRandomWord()];
  return ( <header>
    <img src="src/assets/Neil.png" alt="Neil Gaiman" />
    <img src="src/assets/brian.png" alt="Brian K. Vaughan" />
    <img src="src/assets/alan.png" alt="Alan Moore" />
    <img src="src/assets/frank.png" alt="Frank Miller" />
    <h1>Graphic Novel Legends</h1>
    <p>
      {words} Of The Genre
    </p>
  </header>
  );
}



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
