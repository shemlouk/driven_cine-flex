import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";

const API_URL_POST =
  "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

export default function Form({ selectedSeats }) {
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);

  function submitForm(e) {
    e.preventDefault();
    if (!name || !cpf) {
      if (!name) setName("");
      if (!cpf) setCpf("");
      return;
    }
    const data = {
      ids: selectedSeats,
      name: name,
      cpf: cpf,
    };
    axios
      .post(API_URL_POST, data)
      .then(alert("Reserva realizada com sucesso!"))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }

  const selectColor = (s) => (s === "" ? "red" : "#d4d4d4");

  return (
    <StyledForm>
      <label htmlFor="name">Nome do comprador:</label>
      <StyledInput
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        placeholder="Digite seu nome..."
        color={selectColor(name)}
      ></StyledInput>
      <label htmlFor="cpf">CPF do comprador:</label>
      <StyledInput
        onChange={(e) => setCpf(e.target.value)}
        name="cpf"
        type="number"
        placeholder="Digite seu CPF..."
        color={selectColor(cpf)}
      ></StyledInput>
      <StyledButton onClick={(e) => submitForm(e)}>
        Reservar assento(s)
      </StyledButton>
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
    margin-bottom: 55px;
  }
`;

const StyledInput = styled.input`
  width: 327px;
  height: 51px;
  border: 1px solid ${({ color }) => color};
  border-radius: 3px;
  font-size: 18px;
  padding-left: 18px;
  margin-bottom: 15px;

  :focus {
    outline: none;
  }
`;
