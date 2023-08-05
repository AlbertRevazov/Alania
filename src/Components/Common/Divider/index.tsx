import { FC } from "react";
import "./styles.css";

export const Divider: FC = () => {
  return (
    <div className="divider__root">
      <div className="divider__wrap">
        <h1 className="divider__title __container">
          Responsive Scalloped Page Dividers.
        </h1>
      </div>
    </div>
  );
};
