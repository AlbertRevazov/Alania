import { FC } from "react";
import { AboutData } from "./AboutData";
import { Card } from "../../Common/Card";
import "./styles.css";

export const About: FC = () => {
  return (
    <div className="about__root about__container ">
      {AboutData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      
    </div>
  );
};
