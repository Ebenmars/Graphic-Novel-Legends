import {useState} from "react";
import { BIOS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import Bios from "./components/Bios/Bios.jsx";
import TabButton from "./components/TabButton.jsx";
import { WORKS } from "./data.js";
function App() {
  let [selectedTopic,setSelectedTopic] = useState("alanWorks");

  function handleSelected(selectedAuthor) {
    setSelectedTopic(selectedAuthor);
    console.log("Selected: " + selectedTopic);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="bios">
          <h2>Bios</h2>
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
        <section id="works">
          <h2>Works</h2>
          <menu>

            <TabButton onSelected={() => handleSelected("alanWorks")}>Alan Moore</TabButton>
            <TabButton onSelected={() => handleSelected("neilWorks")}>Neil Gaiman</TabButton>
            <TabButton onSelected={() => handleSelected("brianWorks")}>Brian K. Vaughan</TabButton>
            <TabButton onSelected={() => handleSelected("frankWorks")}>Frank Miller</TabButton>
          </menu>
          <div id="tab-content">
            
            <h3>{WORKS[selectedTopic].title}</h3>
            <ul>
            <img src={WORKS[selectedTopic].image0} alt="" />
            <img src={WORKS[selectedTopic].image1} alt="" />
            <img src={WORKS[selectedTopic].image2} alt="" />
            <img src={WORKS[selectedTopic].image3} alt="" />
            </ul>
            
            
          </div>
          
        </section>
      </main>
    </div>
  );
}
export default App;
