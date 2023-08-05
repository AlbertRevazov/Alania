import { FC } from "react";
import { Days } from "./Days";
import { Footer } from "../Footer";
import { WelcomeBlock } from "./Welcome";
import { About } from "./About";
import { Divider } from "../Common/Divider";
import "./styles.css";

export const Welcome: FC = () => {
  return (
    <div>
      <WelcomeBlock />
      <Divider />
      <About />
      <Days />
      <Footer />
    </div>
  );
};
