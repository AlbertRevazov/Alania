import { useState } from "react";

export const useSlideHook = (length: number) => {
  const [activeId, setActiveId] = useState(0);

  const prev = () => {
    setActiveId((activeId) => {
      if (activeId > 0) {
        return activeId - 1;
      }
      return activeId;
    });
  };

  const next = () => {
    setActiveId((activeId) => {
      if (activeId < length - 1) {
        return activeId + 1;
      }
      return activeId;
    });
  };

  const activeChange: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const activeId = e.currentTarget.id;
    setActiveId(Number(activeId));
  };

  return { prev, next, activeChange, activeId, setActiveId };
};
