import "./dropdown.css";

export const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select onChange={(event) => props.setValue(event.target.value)}>
        {props.items.map((item) => {
          return <option key={item.name}>{item.name}</option>;
        })}
      </select>
    </div>
  );
};
