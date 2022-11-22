import "./Text.scss";

import { TEXT_TYPES } from "./text.constants";

const TEXT_TYPE = {
  [TEXT_TYPES.SM]: "sm",
  [TEXT_TYPES.MD]: "md",
  [TEXT_TYPES.LG]: "lg",
};

const Text = ({ title, type, bold, onClick = () => {} }) => (
  <p
    onClick={onClick}
    className={`text--title text--title__${TEXT_TYPE[type]} ${
      bold && "text--title__bold"
    }`}
  >
    {title}
  </p>
);

export default Text;
