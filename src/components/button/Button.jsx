import "./Button.scss";
const BUTTON_TYPE = {
  alter: "alter",
  secondary: "secondary",
};
const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <button className={`btn ${BUTTON_TYPE[btnType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
