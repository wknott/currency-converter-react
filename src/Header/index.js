import React from "react";
import "./styles.css";

const Header = ({ date }) => (
  <header className="header">
    <p className="header__date">Dzisiaj jest {date}</p>
    <h1 className="header__title">Przelicznik walut</h1>
  </header>
)

export default Header;