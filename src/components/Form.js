import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const API_URL_POST =
  "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

export default function Form({ setInfo, selectedSeats }) {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState("");

  function submitForm(e) {
    e.preventDefault();
    setInfo({ seats: selectedSeats.map((s) => s.name), name: name, cpf: cpf });
    const data = { ids: selectedSeats.map((s) => s.id), name: name, cpf: cpf };
    axios
      .post(API_URL_POST, data)
      .then(navigate("/sucesso"))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }

  return (
    <StyledForm onSubmit={(e) => submitForm(e)}>
      <label htmlFor="name">Nome do comprador:</label>
      <Input
        data-test="client-name"
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        placeholder="Digite seu nome..."
        required
      ></Input>
      <label htmlFor="cpf">CPF do comprador:</label>
      <Input
        data-test="client-cpf"
        onChange={(e) =>
          setCpf(
            e.target.value.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            )
          )
        }
        name="cpf"
        maxLength="13"
        value={cpf}
        type="text"
        placeholder="Digite seu CPF..."
        pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
        required
        title="Deve conter 11 dígitos"
      ></Input>
      <Submit
        data-test="book-seat-btn"
        type="submit"
        value="Reservar assento(s)"
      />
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
