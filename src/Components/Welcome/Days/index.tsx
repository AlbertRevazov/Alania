import { FC, useState } from "react";
import { Slider } from "../../Common/Slider";
import { Buttons } from "./sections/Buttons/Buttons";
import { DayFour, DayOne, DayThree, DayTwo } from "./DaysData";
import "./styles.css";

export const Days: FC = () => {
  const [dayCount, setDayCount] = useState("первый");

  return (
    <div className="slider__wrap">
      <div className="content__contain">
        <Buttons dayCount={dayCount} setDayCount={setDayCount} />
        <Slider
          data={
            dayCount === "первый"
              ? DayOne
              : dayCount === "второй"
              ? DayTwo
              : dayCount === "третий"
              ? DayThree
              : DayFour
          }
        />
      </div>
    </div>
  );
};
