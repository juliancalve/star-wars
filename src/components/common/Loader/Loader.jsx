import "./Loader.scss";

import BabyYoda from "../../../assets/images/babyyoda.png";

const Loader = () => (
  <div className="loader--container">
    <img className="loader--gif" src={BabyYoda} />
    <span className="loader"></span>
  </div>
);

export default Loader;
