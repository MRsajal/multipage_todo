import { createContext, useContext } from "react";

export const pointContext = createContext({
  getPoints: () => {},
  setPoints: (points) => {},
});

export const usePoint = () => {
  return useContext(pointContext);
};

export const pointProvider = pointContext.Provider;
