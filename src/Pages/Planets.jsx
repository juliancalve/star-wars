import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BreadCrumbs } from "../components";
import { Text, TEXT_TYPES, Card, Table } from "../components/common";
import { useFetch, useTable } from "../hooks";
import { PATHS } from "../constants/paths";
import { residentsTransform } from "../utils/transforms/residents.transform";
import { getResidents } from "../services/residents.service";

import { StarWarsContext } from "../context/starWars.context";
const TABLE_HEADERS = [
  "name",
  "climate",
  "terrain",
  "diameter",
  "gravity",
  "population",
];
const Planets = () => {
  const navigate = useNavigate();
  const { planets, setResidents, modifyBreadCrumbs } =
    useContext(StarWarsContext);

  const { body, page, prevPage, nextPage, total, search, onChangeSearch } =
    useTable({
      data: planets,
    });

  const { resp, apiCall } = useFetch({
    service: getResidents,
    transform: residentsTransform,
    callback: () => {
      setResidents(resp);
      navigate(PATHS.RESIDENTS);
    },
  });

  const onClickRow = (data) => {
    const urls = data?.residents?.map((resident) => {
      const splited = resident.split("/");
      return splited?.[splited?.length - 2];
    });
    apiCall(urls);
    modifyBreadCrumbs(1, data.name);
  };

  return (
    <Card>
      <BreadCrumbs name="All Planets" index={0} />
      <Text type={TEXT_TYPES.LG} title="Planets" />
      <Table
        data={body}
        columns={TABLE_HEADERS}
        onClickRow={onClickRow}
        search={{
          value: search,
          onChange: onChangeSearch,
        }}
        paginate={{ page, prevPage, nextPage, total }}
      />
    </Card>
  );
};

export default Planets;
