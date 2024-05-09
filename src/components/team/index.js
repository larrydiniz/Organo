import { Employee } from "../employee";
import "./team.css";

export const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="employees">
        {props.employees.map((employee) => (
          <Employee
            key={employee.name}
            name={employee.name}
            role={employee.role}
            image={employee.image}
          />
        ))}
      </div>
    </section>
  );
};
