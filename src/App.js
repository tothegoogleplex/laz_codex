import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CharsPage } from "./components/CharsPage";
import { ErrorPage } from "./components/ErrorPage";
import { PContainer } from "./components/PContainer";
import { CharInfo } from "./components/CharInfo";
import { AboutPage } from "./components/AboutPage";
import { NavBar } from "./components/NavBar";
import { SophontList } from "./components/SophontList";
import { SophontDetail } from "./components/SophontDetail";

import './App.css';

function App() {
  return (
    <Router>
      <PContainer />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<CharsPage />} />
        <Route path="/char/:charName" element={<CharInfo />} />
        <Route path="/sophonts" element={<SophontList />} />
        <Route path="/sophont/:sName" element={<SophontDetail />} />
        {/* <Route path="/locations" element={LocalePage} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
