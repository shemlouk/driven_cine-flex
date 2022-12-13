import apiURL from "../apiURL";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ selectedSeats, movie, session }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    axios
      .post(apiURL.post, {
        name: name,
        cpf: cpf,
        ids: selectedSeats.map((s) => s.id),
      })
      .then(
        navigate("/sucesso", {
          state: {
            data: {
              name: name,
              cpf: cpf,
              movie: movie,
              session: session,
              seats: selectedSeats.map((s) => s.name),
            },
          },
        })
      )
      .catch((error) =>
        alert(`Não foi possível enviar os dados\n${error.message}`)
      );
  }

  return (
    <StyledForm onSubmit={(e) => submitForm(e)}>
      <label htmlFor="name">Nome do comprador:</label>
      <Input
        data-test="client-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        placeholder="Digite seu nome..."
        required
      ></Input>
      <label htmlFor="cpf">CPF do comprador:</label>
      <Input
        data-test="client-cpf"
        value={cpf}
        onChange={(e) =>
          setCpf(
            e.target.value.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            )
          )
        }
        name="cpf"
        type="text"
        placeholder="Digite seu CPF..."
        required
        pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
        title="Deve conter 11 dígitos"
        maxLength="11"
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
