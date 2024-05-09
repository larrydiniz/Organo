import { useState } from "react";
import { Banner } from "./components/banner";
import { Form } from "./components/form";
import { Team } from "./components/team";
import { teams } from "./common/constants";

function App() {
  const [employees, setEmployees] = useState([]);

  const newEmployee = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form registeredEmployee={(employee) => newEmployee(employee)} />
      {teams.map((team) => {
        const { name, primaryColor, secondaryColor } = team;
        return (
          <Team
            key={name}
            name={name}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            employees={employees.filter(
              (employee) => employee.team === team.name
            )}
          />
        );
      })}
    </div>
  );
}

export default App;
