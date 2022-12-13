import apiURL from "../../apiURL";
import axios from "axios";
import styled from "styled-components";
import Container from "../Container";
import Footer from "../Footer";
import Loading from "../Loading";
import Session from "../Session";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SessionsPage() {
  const [data, setData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(apiURL.sessions(movieId))
      .then((res) => setData(res.data))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }, []);

  return (
    <>
      <Container adjustBottom="true">
        <p>Selecione o horário</p>
        <SessionsList>
          {Object.keys(data).length !== 0 ? (
            data.days.map((d) => <Session key={d.id} {...d} />)
          ) : (
            <Loading />
          )}
        </SessionsList>
      </Container>
      {Object.keys(data).length !== 0 && (
        <Footer {...{ title: data.title, posterURL: data.posterURL }} />
      )}
    </>
  );
}

const SessionsList = styled.ul`
  width: 100%;
`;
