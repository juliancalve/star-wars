import { createContext, useEffect, useState } from "react";
import { PATHS } from "../constants/paths";

const initialValue = {
  planets: [],
  residents: [],
  personalData: {},
  error: "",
  breadCrumb: [
    { name: "All planets", path: PATHS.PLANETS },
    { name: "", path: PATHS.RESIDENTS },
    { name: "", path: PATHS.PERSONAL_DETAILS },
  ],
};

export const StarWarsContext = createContext(initialValue);

export const StarWarsContextProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [residents, setResidents] = useState([]);
  const [error, setError] = useState(null);

  const [personalData, setPersonalData] = useState({});

  const [breadCrumbs, setBreadCrumbs] = useState([
    { name: "All planets", path: PATHS.PLANETS },
    { name: "", path: PATHS.RESIDENTS },
    { name: "", path: PATHS.PERSONAL_DETAILS },
  ]);

  const modifyBreadCrumbs = (position, newName) => {
    setBreadCrumbs(
      breadCrumbs.map((breadC, i) => {
        if (position < i) {
          return { ...breadC, name: "" };
        } else if (position === i) {
          return { ...breadC, name: newName };
        } else {
          return { ...breadC };
        }
      })
    );
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 2500);
    }
  }, [error]);

  return (
    <StarWarsContext.Provider
      value={{
        planets,
        setPlanets,

        isLoading,
        setIsLoading,

        residents,
        setResidents,

        error,
        setError,

        breadCrumbs,
        modifyBreadCrumbs,

        personalData,
        setPersonalData,
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};
