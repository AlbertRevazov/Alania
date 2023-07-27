import React, { FC } from "react";
import { Card } from "../Card";
import { IDaysData } from "./DaysData";
import "./styles.css";

interface IDaysProps {
  data: IDaysData[];
}
export const CustomDay: FC<IDaysProps> = ({ data }) => {
  const { daysCount, dayNum } = data[0];

  return (
    <div className={`${daysCount}__wrap`}>
      <h1 className="day__title"> {dayNum} </h1>
      <div className={`${daysCount}__root__contain`}>
        {data.map((day: IDaysData) => (
          <Card
            key={day.src}
            description={day.description}
            index={day.id}
            src={day.src}
            alt={day.alt}
            cardTitle={day.cardTitle}
          />
        ))}
      </div>
    </div>
  );
};
