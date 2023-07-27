import { FC } from "react";
import "./styles.css";
import { iDaysProps } from "../../Welcome/Days/sections/DaysButtons";

interface IButtonProps extends iDaysProps {
  title: string;
}

export const Button: FC<IButtonProps> = ({ title, dayNum, setDayNum }) => {
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setDayNum(event.currentTarget.value);
  };

  return (
    <button
      onClick={clickHandler}
      value={title}
      type="button"
      className={`button__root `}
    >
      AAAAAAAAAA{title}
    </button>
  );
};
