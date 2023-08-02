import { FC } from "react";
import { AboutDatatype } from "../../Welcome/About/AboutData";
import "./styles.css";

interface ICardProps {
  item: AboutDatatype;
}

export const Card: FC<ICardProps> = ({ item }) => {
  return (
    <div className="card__root">
      <div className="card__wrap">
        <img className="card__image" src={item.img} alt={item.title} />
        <h2 className="card__title">{item.title}</h2>
        <h4 className="card__description">{item.description}</h4>
      </div>
    </div>
  );
};
