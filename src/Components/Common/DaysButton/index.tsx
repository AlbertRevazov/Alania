import { FC } from "react";
import { iDaysProps } from "../../Welcome/Days/sections/Buttons/Buttons";
import "./styles.css";

interface IButtonProps extends iDaysProps {
  title: string;
}

export const DaysButton: FC<IButtonProps> = ({
  title,
  dayCount,
  setDayCount,
}) => {
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setDayCount(event.currentTarget.value);
  };

  return (
    <button
      onClick={clickHandler}
      value={title}
      type="button"
      className={`button__root ${dayCount === title ? "active__button" : ""}`}
    >
      {title}
    </button>
  );
};
