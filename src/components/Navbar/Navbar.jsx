import StarWarsLogo from "../../assets/images/star-wars-logo.png";

import "./Navbar.scss";

const Navbar = () => (
  <div className="navbar--container">
    <img width={175} src={StarWarsLogo} />
  </div>
);

export default Navbar;
