import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CardDetail from "./components/CardDetail/CardDetail";
import Cards from "./components/Cards/Cards";
const App = () => {
  return (
    <>
      <>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<section></section>} />
            <Route exact path="/items" element={<Cards />} />
            <Route path="/items/:id" element={<CardDetail />} />
          </Routes>
        </main>
      </>
    </>
  );
};

export default App;
