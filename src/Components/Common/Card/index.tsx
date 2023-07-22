import React, { FC } from "react";
import "./styles.css";

export interface ICardProps {
  src: string;
  alt: string;
  cardTitle: string;
  description: string;
  index: number;
}
export const Card: FC<ICardProps> = ({
  src,
  alt,
  description,
  cardTitle,
  index,
}) => {
  return (
    <div
      className={(index + 1) % 2 === 1 ? "card__root" : "card__root__reverse"}
    >
      <div className="card__info">
        <h1 className="card__index">0{index}</h1>
        <h3 className="card__title">{cardTitle}</h3>
      </div>
      <h4 className="card__description">{description}</h4>
      <img className="card__image" src={src} alt={alt} />
    </div>
  );
};
