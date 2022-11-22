import { useEffect, useState } from "react";

export const useTable = ({ data, perPage = 10 }) => {
  const [body, setBody] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");

  const prevPage = () => {
    setBody(data?.slice((page - 2) * perPage, (page - 1) * perPage));
    setPage(page - 1);
  };

  const nextPage = () => {
    setBody(data?.slice(page * perPage, (page + 1) * perPage));
    setPage(page + 1);
  };

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filterData = () =>
    data.filter((d) =>
      Object.values(d).find(
        (val) =>
          typeof val === "string" &&
          val?.toLowerCase()?.includes(search.toLowerCase())
      )
    );

  useEffect(() => {
    setPage(1);
    const filtered = filterData() || [];
    setTotal(Math.ceil(filtered?.length / perPage));
    setBody(filtered?.slice(0, perPage));
  }, [search, data]);

  return { body, page, prevPage, nextPage, total, onChangeSearch, search };
};
