import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const API_URL_POST =
  "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

export default function Form({ selectedSeats }) {
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);

  function submitForm() {
    const data = { ids: selectedSeats, name: name, cpf: cpf };
    axios
      .post(API_URL_POST, data)
      .then(alert("Reserva realizada com sucesso!"))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }

  return (
    <StyledForm onSubmit={submitForm}>
      <label htmlFor="name">Nome do comprador:</label>
      <Input
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        placeholder="Digite seu nome..."
        required
      ></Input>
      <label htmlFor="cpf">CPF do comprador:</label>
      <Input
        onChange={(e) => setCpf(e.target.value)}
        name="cpf"
        type="number"
        placeholder="Digite seu CPF..."
        required
      ></Input>
      <Submit type="submit" value="Reservar assento(s)" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    width: 100%;
    text-align: start;
    line-height: 30px;
  }

  input:last-of-type {
    margin-top: 50px;
  }
`;

const Input = styled.input`
  width: 327px;
  height: 51px;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  font-size: 18px;
  padding-left: 18px;
  margin-bottom: 15px;

  :focus {
    outline: none;
  }
`;

const Submit = styled.input`
  padding: 0px 20px;
  height: 43px;
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  margin-right: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: var(--main-color-darker);
  }
`;
