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
      <svg width="200" height="62">
        <defs>
          <linearGradient id="grad1">
            <stop offset="0%" stop-color="#FF8282" />
            <stop offset="100%" stop-color="#E178ED" />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="5"
          rx="25"
          fill="none"
          stroke="url(#grad1)"
          width="190"
          height="50"
        ></rect>
      </svg>
      <span>{title}</span>
    </button>
  );
};
