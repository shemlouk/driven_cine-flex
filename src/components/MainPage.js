import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Header from "./Header";
import Loading from "./Loading";
import Poster from "./Poster";

const API_URL_MOVIES = "https://mock-api.driven.com.br/api/v8/cineflex/movies";

export default function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(API_URL_MOVIES).then((res) => setMovies(res.data));
  }, []);

  function showMovies() {
    return movies.map((m) => <Poster key={m.id} imageURL={m.posterURL} />);
  }

  return (
    <>
      <Header />
      <Container>
        <p>Selecione o filme</p>
        <StyledUl>{movies.length === 0 ? <Loading /> : showMovies()}</StyledUl>
      </Container>
    </>
  );
}

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
