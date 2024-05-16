import NavBar from "./components/navbar/NavBar";
import AllGames from "./components/all games/AllGames";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import GameInfo from "./components/game info/GameInfo";
import NotFound from "./components/not found/NotFound";
import BubbleMenu from "./components/bubble menu/BubbleMenu";
import Footer from "./components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className={`bg-main-dark absolute w-lvw top-0 h-lvh overflow-x-clip`}>
      <Analytics />
      <header className="absolute top-0 z-50">
        <NavBar />
      </header>
      <BubbleMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allgames" element={<AllGames />} />
        <Route path="allgames/:id" element={<AllGames />} />
        <Route path="game/:id" element={<GameInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
