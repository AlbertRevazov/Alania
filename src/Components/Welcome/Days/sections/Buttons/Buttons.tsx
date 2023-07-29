import { FC } from "react";
import { DaysButton } from "../../../../Common/DaysButton";
import { daysArray } from "../../DaysData";
import "./styles.css";

export interface iDaysProps {
  dayCount: string;
  setDayCount: React.Dispatch<React.SetStateAction<string>>;
}

export const Buttons: FC<iDaysProps> = ({ dayCount, setDayCount }) => {
  return (
    <div className="days__button__root __container">
      {daysArray.map((day: string) => (
        <DaysButton
          key={day}
          title={day}
          dayCount={dayCount}
          setDayCount={setDayCount}
        />
      ))}
    </div>
  );
};
