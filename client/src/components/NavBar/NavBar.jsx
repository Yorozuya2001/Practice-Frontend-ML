import { Link } from "react-router-dom";
import searchSrc from "../../assets/magnifying-glass.png";

const NavBar = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      <div className="header__div">
        <input
          className="header__div__input"
          placeholder="Nunca dejes de buscar"
          type="text"
        />
        <button className="header__div__button">
          <img
            className="header__div__button__image"
            src={searchSrc}
            alt="Lupa"
          />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
