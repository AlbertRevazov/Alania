import { FC, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Components/Welcome";
import { Loading } from "./Components/Common/Loading/Index";
import "./App.css";

export const App: FC = () => {
  const pageIsLoad = document.readyState;
  const [load, setLoad] = useState(false);

  // Это будет выполнено один раз после монтирования компонента
  useEffect(() => {
    const onPageLoad = () => {
      setLoad(true);
    };

    // Проверька, была ли страница уже загружена
    if (pageIsLoad === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Удалить прослушиватель событий при размонтировании компонента
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [load]);

  return (
    <>
      {!!load ? (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
