import styled from "styled-components";
import Container from "../Container";
import StyledButton from "../StyledButton";
import { Link, useLocation } from "react-router-dom";

export default function SucessPage() {
  const info = useLocation().state.data;
  const seats = info.seats.map((s) => `Assento ${s}`);
  const data = [
    {
      title: "Filme e sessão",
      content: [info.movie, info.session],
      attribute: "movie-info",
    },
    { title: "Ingressos", content: seats, attribute: "seats-info" },
    {
      title: "Comprador",
      content: [`Nome: ${info.name}`, `CPF: ${info.cpf}`],
      attribute: "client-info",
    },
  ];

  return (
    <>
      <Container>
        <p className="sucess-page">Pedido feito com sucesso!</p>

        <StyledUl>
          {data.map((d) => (
            <StyledLi data-test={d.attribute} key={d.title}>
              {d.title}
              {d.content.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </StyledLi>
          ))}
        </StyledUl>

        <Link to="/">
          <StyledButton data-test="go-home-btn">Voltar pra Home</StyledButton>
        </Link>
      </Container>
    </>
  );
}

const StyledUl = styled.ul`
  text-align: start;
  width: 100%;
  margin-bottom: 62px;
`;

const StyledLi = styled.li`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;

  p {
    margin-top: 7px;
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
  }
`;
