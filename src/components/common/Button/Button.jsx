import "./Button.scss";

const Button = ({ title, onClick, disabled }) => (
  <button className="button" disabled={disabled} onClick={onClick}>
    {title}
  </button>
);

export default Button;
