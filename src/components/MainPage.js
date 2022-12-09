import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import Loading from "./Loading";
import Poster from "./Poster";

const API_URL_MOVIES = "https://mock-api.driven.com.br/api/v8/cineflex/movies";

export default function MainPage({ setMovie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL_MOVIES)
      .then((res) => setMovies(res.data))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }, []);

  const showMovies = () =>
    movies.map((m) => (
      <li key={m.id}>
        <Link to={`/sessoes/${m.id}`}>
          <Poster setMovie={setMovie} {...m} />
        </Link>
      </li>
    ));

  const isDataLoaded = () => movies.length !== 0;

  return (
    <>
      <Container>
        <p>Selecione o filme</p>
        <StyledUl>{isDataLoaded() ? showMovies() : <Loading />}</StyledUl>
      </Container>
    </>
  );
}

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  li {
    width: 145px;
    height: 209px;
    margin: 10px;
    transition: 0.3s;
    cursor: pointer;
  }

  li:hover {
    transform: scale(1.05);
  }
`;
