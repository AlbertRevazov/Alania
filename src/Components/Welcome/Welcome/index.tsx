import { FC } from "react";
import "./styles.css";

export const WelcomeBlock: FC = () => {
  return (
    <div className="welcome__alt">
      <div className="title__wrap">
        <div className="title__header">
          <h1 className="head__title">Северную Осетию</h1>
          <h3 className="head__name">Добро пожаловать в</h3>
        </div>
        <h5 className="head__subtitle">
          Мы приглашаем вас на захватывающий тур по одному из самых ярких
          уголков России - <span>Северной Осетии.</span>
          <br />
          Вас ждут впечатляющие пейзажи, богатая история и уникальные культурные
          достопримечательности.
        </h5>
      </div>
      <div className="welc__image" />
    </div>
  );
};
