import { FC } from "react";
import { Days } from "./Days";
import { Footer } from "../Footer";
import { WelcomeAlternate } from "./WelcomeAlternate";
import "./styles.css";

export const Welcome: FC = () => {
  return (
    <div>
      <WelcomeAlternate />
      <div className="wrap__text">
        <h2 className="days__title __container">день первый</h2>
      </div>
      <Days />
      <Footer />
    </div>
  );
};
