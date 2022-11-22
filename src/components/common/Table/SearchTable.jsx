import { Input } from "../Input";
import SearchIcon from "../../../assets/icons/search.svg";

const SearchTable = ({ onChange, value }) => (
  <Input icon={SearchIcon} onChange={onChange} value={value} />
);

export default SearchTable;
