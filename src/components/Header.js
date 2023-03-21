import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center px-10 py-5 font-bold font-montserrat">
      <h1
        className="text-yellow-400 flex-grow text-2xl md:text-3xl "
        onClick={() => {
          navigate("/");
        }}
      >
        CryptoHunt
      </h1>
      <nav>
        <ul className="text-white flex item-center space-x-5 text-sm md:text-[1.2em]">
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            COINS
          </li>
          {/* <li>EXCHANGES</li> */}
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
