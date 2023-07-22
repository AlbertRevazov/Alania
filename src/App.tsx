import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Components/Welcome";

import "./App.css";

export const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
