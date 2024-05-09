import "./text-input.css";

export const TextInput = (props) => {
  const onTextInputChanged = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input
        onChange={onTextInputChanged}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
      />
    </div>
  );
};
