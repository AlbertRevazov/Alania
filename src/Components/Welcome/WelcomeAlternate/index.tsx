import React, { FC } from "react";
import "./styles.css";

export const WelcomeAlternate: FC = () => {
  return (
    <div className="welcome__alt">
      <div className="title__wrap">
        <div className="title__header">
          <h1 className="head__title">Work that we produce for our clients</h1>
          <h3 className="head__name">3D game Dev </h3>
        </div>
        <h5 className="head__subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </h5>
        <button className="welc__button" type="button">
          Get more details
        </button>
      </div>
      <div className="welc__image">
        <img src="" alt="" className="" />
      </div>
    </div>
  );
};
