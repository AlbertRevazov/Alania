import React, { FC } from "react";
import "./styles.css";
import { Days } from "./Days";
import { Footer } from "../Footer";
import { WelcomeAlternate } from "./WelcomeAlternate";

export const Welcome: FC = () => {
  return (
    <div>
      <WelcomeAlternate />
      <Days />
      <Footer />
    </div>
  );
};
