import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BreadCrumbs } from "../components";
import { Text, TEXT_TYPES, Card, Table } from "../components/common";
import { useTable } from "../hooks";
import { PATHS } from "../constants/paths";

import { StarWarsContext } from "../context/starWars.context";

const TABLE_HEADERS = ["name"];

const Residents = () => {
  const { residents, modifyBreadCrumbs, setPersonalData } =
    useContext(StarWarsContext);
  const navigate = useNavigate();

  const { body, page, prevPage, nextPage, total, search, onChangeSearch } =
    useTable({
      data: residents,
    });

  const onClickRow = (resident) => {
    setPersonalData(resident);
    modifyBreadCrumbs(2, resident.name);
    navigate(PATHS.PERSONAL_DETAILS);
  };

  return (
    <Card>
      <BreadCrumbs index={1} />
      <Text type={TEXT_TYPES.LG} title="Residents" />
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

export default Residents;
