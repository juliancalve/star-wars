import "./Input.scss";

const Input = ({ placeholder, onChange, icon }) => (
  <div className="input--container">
    <input
      className="input--element"
      onChange={onChange}
      placeholder={placeholder}
    />
    {icon && (
      <div className="input--icon-container">
        <img className="input--icon" src={icon} />
      </div>
    )}
  </div>
);

export default Input;
