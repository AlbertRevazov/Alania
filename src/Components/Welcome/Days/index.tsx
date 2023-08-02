import { FC, useState } from "react";
import { Slider } from "../../Common/Slider";
import { Buttons } from "./sections/Buttons/Buttons";
import { DayFour, DayOne, DayThree, DayTwo } from "./DaysData";
import "./styles.css";

export const Days: FC = () => {
  const [dayCount, setDayCount] = useState("первый день");

  return (
    <div className="slider__wrap">
      <div className="content__container">
        <Buttons dayCount={dayCount} setDayCount={setDayCount} />
        <Slider
          data={
            dayCount === "первый день"
              ? DayOne
              : dayCount === "второй день"
              ? DayTwo
              : dayCount === "третий день"
              ? DayThree
              : DayFour
          }
        />
      </div>
    </div>
  );
};
