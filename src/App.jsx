import "./App.scss";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { OurReview } from "./Components/OurReview/OurReview";
import { Partnership } from "./Components/Partnership/Partnership";
import { ReadyToSell } from "./Components/ReadyToSell/ReadyToSell";
import { Recomendation } from "./Components/Recomendation/Recomendation";
import { Subscribe } from "./Components/Subscribe/Subscribe";

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
        <section>
          <Subscribe />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
