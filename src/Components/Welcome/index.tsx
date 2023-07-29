import { FC } from "react";
import { Days } from "./Days";
import { Footer } from "../Footer";
import { WelcomeBlock } from "./Welcome";
import "./styles.css";
import { About } from "./About";

export const Welcome: FC = () => {
  return (
    <div>
      <WelcomeBlock />
      <div className="wrap__text">
        <h2 className="days__title __container">Lorem ipsum</h2>
      </div>
      <About />
      <Days />
      <Footer />
    </div>
  );
};
