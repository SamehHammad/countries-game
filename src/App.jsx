import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Game from "./components/Home/Game";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<Game />} path="/game"/>
      </Routes>
    </>
  );
}

export default App;
