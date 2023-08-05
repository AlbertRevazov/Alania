import { FC } from "react";
import "./styles.css";

export const Loading: FC = () => {
  return (
    <div className="loading__root __container">
      <img src="/gif/loading.gif" alt="loading" className="image__loading" />
    </div>
  );
};
