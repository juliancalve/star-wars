import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BreadCrumbs } from "../components";
import { Text, TEXT_TYPES, Card, Sheet } from "../components/common";
import { PATHS } from "../constants/paths";

import { StarWarsContext } from "../context/starWars.context";

const FILTER_KEYS = ['homeworld', 'edited', 'created', 'url'];

const PersonalDetails = () => {
  const navigate = useNavigate();

  const { personalData } = useContext(StarWarsContext);

  if (Object.keys(personalData).length === 0) {
    navigate(PATHS.PLANETS);
  }

  const mapResidentPersonalData = () =>
    Object.keys(personalData).filter(key => !FILTER_KEYS.includes(key)).map((resData) => ({
      key: resData,
      value:
        typeof personalData[resData] === "string"
          ? personalData[resData]
          : personalData[resData].length,
    }));

  return (
    <Card>
      <BreadCrumbs index={2} />
      <Text type={TEXT_TYPES.LG} title="Personal Details" />
      <Sheet data={mapResidentPersonalData()} />
    </Card>
  );
};

export default PersonalDetails;
