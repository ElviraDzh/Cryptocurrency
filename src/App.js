import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import News from "./pages/News";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <div className="bg-[#14161A]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/coin/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
