import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import News from "./pages/News";
import SingleCoin from "./pages/SingleCoin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
      </Routes>
    </div>
  );
}

export default App;
