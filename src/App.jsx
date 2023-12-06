function Header() {
  return ( <header>
    <img src="src/assets/Neil.png" alt="Neil Gaiman" />
    <img src="src/assets/brian.png" alt="Brian K. Vaughan" />
    <img src="src/assets/alan.png" alt="Alan Moore" />
    <img src="src/assets/frank.png" alt="Frank Miller" />
    <h1>Graphic Novel Legends</h1>
    <p>
      Legends of the graphi novel and comic world
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
