import "./InputForm.scss";

const InputForm = ({ label, ...otherProps }) => {
  return (
    <div className="group-form">
      <input className="input-form" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } input-form-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default InputForm;
