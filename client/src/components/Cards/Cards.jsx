import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
import { Link } from "react-router-dom";

const Cards = () => {
  const { items, setItems } = useContext(MyContext);

  useEffect(() => {
    return () => setItems(null);
  }, [setItems]);
  return (
    <section className="section">
      {items?.results?.map((result) => {
        return (
          <Link
            key={result.id}
            className="section__card"
            to={`/items/${result.id}`}
          >
            <div className="section__card__imageContainer">
              <img
                className="section__card__imageContainer__image"
                src={result.picture}
                alt={result.title}
              />
            </div>
            <div className="section__card__infoContainer">
              <h2 className="section__card__infoContainer__price">
                $ {result.price.amount.toLocaleString("es-ES")}
              </h2>
              <h2 className="section__card__infoContainer__title">
                {result.title}
              </h2>
            </div>
            <div className="section__card__adressContainer">
              <h3 className="section__card__adressContainer__state">
                {result.state}
              </h3>
              <h3 className="section__card__adressContainer__city">
                {result.city}
              </h3>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Cards;
