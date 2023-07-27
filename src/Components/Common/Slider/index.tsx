import { FC } from "react";
import "./styles.css";
import { IconButton } from "../IconButton";
import { useSlideHook } from "./hooks";
import { Days } from "../CustomDay/DaysData";

export const Slider: FC<Days> = ({ data }) => {
  const { prev, next, activeChange, activeId } = useSlideHook(data.length);

  return (
    <div className="slider-wrap">
      <div className="slider">
        <div className="slider__actions left">
          <IconButton
            direction="left"
            onClick={prev}
            disable={activeId === 0}
          />
        </div>
        {data.map((slide, idx) => (
          <div
            key={slide.cardTitle}
            className={`slide${idx === activeId ? " active" : ""}`}
            onClick={activeChange}
            id={`${idx}`}
          >
            <div className="slide__info">
              <div className="slide__title">{slide.cardTitle}</div>
              <div className="slide__description">{slide.description}</div>
            </div>
            <img src={slide.src} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
        <div className="slider__actions right">
          <IconButton
            direction="right"
            onClick={next}
            disable={activeId === data.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
