import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Session from "./Session";
import Container from "./Container";
import Footer from "./Footer";
import Loading from "./Loading";

const API_URL_SESSIONS = (id) =>
  `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`;

export default function SessionsPage({ setSession }) {
  const [sessions, setSessions] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(API_URL_SESSIONS(movieId))
      .then((res) => setSessions(res.data))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }, []);

  const showCards = () =>
    sessions.days.map((d) => (
      <Session key={d.id} setSession={setSession} {...d} />
    ));
  const isDataLoaded = () => Object.keys(sessions).length !== 0;

  return (
    <>
      <Container adjustBottom="true">
        <p>Selecione o horário</p>
        <StyledUl>{isDataLoaded() ? showCards() : <Loading />}</StyledUl>
      </Container>
      {isDataLoaded() && (
        <Footer title={sessions.title} posterURL={sessions.posterURL} />
      )}
    </>
  );
}

const StyledUl = styled.ul`
  width: 100%;
`;
