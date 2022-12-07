import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";

const API_URL_SESSIONS = (id) =>
  `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`;

export default function SessionsPage() {
  const [sessions, setSessions] = useState({});
  const [sessionID, setSessionID] = useState(3);

  useEffect(() => {
    axios
      .get(API_URL_SESSIONS(sessionID))
      .then((res) => setSessions(res.data))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }, [sessionID]);

  const showCards = () => sessions.days.map((d) => <Card key={d.id} {...d} />);
  const isDataLoaded = () => Object.keys(sessions).length !== 0;

  return (
    <>
      <Header />
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
