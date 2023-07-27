import { FC, useEffect, useState } from "react";
import { Slider } from "../../Common/Slider";
import { DaysButtons } from "./sections/DaysButtons";
import {
  DayFour,
  DayOne,
  DayThree,
  DayTwo,
} from "../../Common/CustomDay/DaysData";
import "./styles.css";

export const Days: FC = () => {
  const [dayNum, setDayNum] = useState("first");
  // useEffect(() => {
  //   console.log(dayNum);
  // }, [dayNum]);
  return (
    <div className="slider__wrap">
      <div className="content__contain">
        <DaysButtons dayNum={dayNum} setDayNum={setDayNum} />

        {dayNum === "first" && <Slider data={DayOne}  />}
        {dayNum === "second" && <Slider data={DayTwo}  />}
        {dayNum === "third" && <Slider data={DayThree}  />}
        {dayNum === "fourth" && <Slider data={DayFour}  />}
      </div>
    </div>
  );
};
