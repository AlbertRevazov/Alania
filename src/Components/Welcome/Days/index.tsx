import React, { FC } from "react";
import { CustomDay } from "../../Common/CustomDay";
import {
  DayFour,
  DayOne,
  DayThree,
  DayTwo,
} from "../../Common/CustomDay/DaysData";
import { Slider } from "../../Common/Slider";
import "./styles.css";

export const Days: FC = () => {
  return (
    <>
      <div className="content __container">
        <h2 className="gradient__title">день первый</h2>
        <Slider data={DayOne} />
      </div>
      <CustomDay data={DayOne} />
    </>
  );
};
