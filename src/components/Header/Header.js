import React from "react";
import "./Header.scss";

const levelNames = [
  "Разминка",
  "Воробьиные",
  "Лесные",
  "Певчие",
  "Хищные",
  "Морские",
];

function Header({ score, level }) {
  return (
    <div className="header">
      <div className="header__top-part">
        <h2 className="header__logo">SongBird</h2>
        <h5 className="header__score">Счет: {score}</h5>
      </div>
      <div className="header__bottom-part">
        <ul className="header__level-list">
          {levelNames.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  level === index
                    ? "header__level-item header__level-item--in-progress"
                    : level > index
                    ? "header__level-item header__level-item--done"
                    : "header__level-item"
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
