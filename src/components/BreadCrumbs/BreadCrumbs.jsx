import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import { StarWarsContext } from "../../context/starWars.context";
import { Text, TEXT_TYPES } from "../common";

import "./BreadCrumbs.scss";

const BreadCrumbs = ({ index }) => {
  const navigate = useNavigate();
  const { breadCrumbs, modifyBreadCrumbs } = useContext(StarWarsContext);

  useEffect(() => {
    modifyBreadCrumbs(index, breadCrumbs[index].name);
  }, []);

  return (
    <div className="breadcrumbs">
      {breadCrumbs
        .filter((b) => b.name !== "")
        .map((b, i) => (
          <Text
            title={`/${b.name}`}
            key={i}
            type={TEXT_TYPES.SM}
            onClick={() => navigate(b.path)}
          />
        ))}
    </div>
  );
};

export default BreadCrumbs;
