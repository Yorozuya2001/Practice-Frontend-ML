import { Link, useNavigate } from "react-router-dom";
import searchSrc from "../../assets/magnifying-glass.png";
import { useContext, useEffect, useState } from "react";
import { backURL } from "../../main";
import { MyContext } from "../../context/context";

const NavBar = () => {
  const navigate = useNavigate();
  const [searchToggle, setSearchToggle] = useState(false);
  const { setItems, items, value, setValue } = useContext(MyContext);

  const handleChange = (event) => setValue(event.target.value);

  useEffect(() => {
    if (items && searchToggle) {
      navigate(`/items?search=${items.query}`);
      setSearchToggle(false);
    }
  }, [items, navigate]);

  const handleClick = () => {
    fetch(`${backURL}/api/items?search=${value}`)
      .then((res) => res.json())
      .then((res) => setItems(res))
      .catch((err) => console.log(err))
      .finally(() => setSearchToggle(true));
  };

  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      <div className="header__div">
        <input
          className="header__div__input"
          placeholder="Nunca dejes de buscar"
          value={value}
          onChange={(event) => handleChange(event)}
          type="text"
        />
        <button className="header__div__button" onClick={handleClick}>
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
