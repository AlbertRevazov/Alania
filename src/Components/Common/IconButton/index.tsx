import { FC } from "react";
import "./styles.css";

interface IConButtonProps {
  direction: string;
  disable: boolean;
  onClick: () => void;
}

export const IconButton: FC<IConButtonProps> = ({
  direction,
  disable,
  onClick,
}) => {
  let cls = "icon-button";

  if (direction === "left") cls += " left";
  if (direction === "right") cls += " right";
  if (disable) cls += " disable";

  return <div className={cls} onClick={onClick} />;
};
