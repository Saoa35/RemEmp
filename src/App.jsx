import "./App.scss";
import { Header } from "./Components/Header/Header";
import { OurReview } from "./Components/OurReview/OurReview";
import { Partnership } from "./Components/Partnership/Partnership";
import { ReadyToSell } from "./Components/ReadyToSell/ReadyToSell";
import { Recomendation } from "./Components/Recomendation/Recomendation";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Recomendation />
        </section>
        <section>
          <ReadyToSell />
        </section>
        <section>
          <OurReview />
        </section>
        <section>
          <Partnership />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
