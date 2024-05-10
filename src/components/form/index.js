import { useState } from "react";
import { Button } from "../button";
import { Dropdown } from "../dropdown";
import { TextInput } from "../text-input";
import "./form.css";
import { teams } from "../../common/constants";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registeredEmployee({
      name,
      role,
      image,
      team,
    });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <TextInput
          label="Nome"
          placeholder="Digite seu nome completo"
          value={name}
          setValue={(value) => setName(value)}
          required
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo atual"
          value={role}
          setValue={(value) => setRole(value)}
          required
        />
        <TextInput
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          setValue={(value) => setImage(value)}
        />
        <Dropdown
          label="Time"
          items={teams}
          value={team}
          setValue={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};
