import "./employee.css";

export const Employee = ({ name, role, image, backgroundColor }) => {
  return (
    <div className="employee">
      <div
        className="image-section"
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={image} alt={`Foto do colaborador ${name}`} />
      </div>
      <div className="text-section">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};
