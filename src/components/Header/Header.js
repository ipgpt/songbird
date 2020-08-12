import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__top-part">
        <h2 className="header__logo">SongBird</h2>
        <h5 className="header__score">Score: 100500</h5>
      </div>
      <div className="header__bottom-part">
        <ul className="header__level-list">
          <li className="header__level-item">first</li>
          <li className="header__level-item">second</li>
          <li className="header__level-item">third</li>
          <li className="header__level-item">fourth</li>
          <li className="header__level-item">fifth</li>
          <li className="header__level-item">sixth</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
