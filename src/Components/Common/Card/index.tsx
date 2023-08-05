import { FC } from "react";
import { AboutDatatype } from "../../Welcome/About/AboutData";
import "./styles.css";

interface ICardProps {
  item: AboutDatatype;
}

export const Card: FC<ICardProps> = ({ item }) => {
  return (
    <div className="card__root">
      <div className="card">
        <div className="front">
          <p>{item.title}</p>
          <img className="card__image" src={item.img} alt={item.title} />
        </div>
        <div className="back">
          <div>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
