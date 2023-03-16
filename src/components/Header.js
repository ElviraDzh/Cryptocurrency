import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center px-10 py-5 font-bold font-montserrat">
      <h1 className="text-yellow-400 flex-grow text-3xl">CryptoHunt</h1>
      <nav>
        <ul className="text-white flex item-center space-x-5 text-[18px]">
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            COINS
          </li>
          <li>EXCHANGES</li>
          <li
            onClick={() => {
              navigate("/news");
            }}
          >
            NEWS
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
