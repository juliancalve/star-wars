import { useContext } from "react";

import SearchTable from "./SearchTable";
import { Button } from "../Button";

import { StarWarsContext } from "../../../context/starWars.context";

import "./Table.scss";

const Table = ({
  data = [],
  columns = [],
  search,
  paginate,
  onClickRow = () => {},
}) => {
  const { isLoading } = useContext(StarWarsContext);

  return (
    <div className="table--container">
      {search && (
        <div className="table--search">
          <SearchTable onChange={search.onChange} value={search.value} />
        </div>
      )}
      {data.length > 0 ? (
        <table className="table">
          <thead className="table--head">
            <tr>
              {columns.map((col) => (
                <th key={col} style={{ textAlign: "start" }}>
                  {col.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table--body">
            {data.map((d, index) => (
              <tr onClick={() => onClickRow(d)} key={index}>
                {columns.map((col, index) => (
                  <td key={index}>{d[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="table--no-content">{!isLoading && "No content"}</div>
      )}
      {paginate && paginate.total > 0 && (
        <div className="table--paginate-container">
          <Button
            disabled={paginate.page === 1}
            title="<"
            onClick={paginate.prevPage}
          />
          <span style={{ marginRight: "3px" }}>{paginate.page}</span>
          of
          <span style={{ marginLeft: "3px" }}>{paginate.total}</span>
          <Button
            disabled={paginate.page === paginate.total}
            title=">"
            onClick={paginate.nextPage}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
