import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import News from "./pages/News";

function App() {
  return (
    <div className="bg-[#14161A]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
