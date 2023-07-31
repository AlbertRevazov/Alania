import { FC, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Components/Welcome";

import "./App.css";

export const App: FC = () => {
  const [isLoad, setIsLoad] = useState(false);

  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      setIsLoad(true);
    }
  };

  return (
    <>
      {isLoad ? (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <div className="load"> 
          <img src="https://i.pinimg.com/originals/12/6c/a6/126ca6bcc2616e4edf09f466e9925396.gif" />
        </div>
      )}
    </>
  );
};
