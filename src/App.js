import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CharsPage } from "./components/CharsPage";
import { ErrorPage } from "./components/ErrorPage";
import { PContainer } from "./components/PContainer";
import { CharInfo } from "./components/CharInfo";
import { RaceList } from "./components/RaceList";

import './App.css';

function App() {
  return (
    <Router>
      <PContainer />
      <Routes>
        <Route path="/" exact element={<CharsPage />} />
        <Route path="/char/:charName" element={<CharInfo />} />
        <Route path="/races" element={<RaceList />} />
        {/* <Route path="/locations" component={LocalePage} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
