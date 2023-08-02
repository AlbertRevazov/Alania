import { FC } from "react";
import { Days } from "./Days";
import { Footer } from "../Footer";
import { WelcomeBlock } from "./Welcome";
import { About } from "./About";
import "./styles.css";

export const Welcome: FC = () => {
  return (
    <div>
      <WelcomeBlock />
      <div className="wrap__text">
        <h2 className="days__title __container">Что вас ждёт</h2>
      </div>
      <About />
      <Days />
      <Footer />
    </div>
  );
};
