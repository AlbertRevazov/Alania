import { FC } from "react";
import "./styles.css";
import { Button } from "../../../Common/Button";

export interface iDaysProps {
  dayNum: string;
  setDayNum: React.Dispatch<React.SetStateAction<string>>;
}

export const DaysButtons: FC<iDaysProps> = ({ dayNum, setDayNum }) => {
  return (
    <div className="days__button__root __contain">
      <Button title="first" dayNum={dayNum} setDayNum={setDayNum} />
      <Button title="second" dayNum={dayNum} setDayNum={setDayNum} />
      <Button title="third" dayNum={dayNum} setDayNum={setDayNum} />
      <Button title="fourth" dayNum={dayNum} setDayNum={setDayNum} />
    </div>
  );
};
