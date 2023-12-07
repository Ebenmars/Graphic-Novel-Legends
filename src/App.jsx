
import { BIOS } from "./data.js";
import Header from "./components/Header.jsx";
import Bios from "./components/Bios.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="bios">
          <h2>{}</h2>
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
