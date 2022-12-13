import apiURL from "../../apiURL";
import axios from "axios";
import styled from "styled-components";
import Container from "../Container";
import Loading from "../Loading";
import Poster from "../Poster";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL.movies)
      .then((res) => setMovies(res.data))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }, []);

  return (
    <>
      <Container>
        <p>Selecione o filme</p>
        <MoviesList>
          {movies.length !== 0 ? (
            movies.map((m) => (
              <li data-test="movie" key={m.id}>
                <Link to={`/sessoes/${m.id}`}>
                  <Poster posterURL={m.posterURL} />
                </Link>
              </li>
            ))
          ) : (
            <Loading />
          )}
        </MoviesList>
      </Container>
    </>
  );
}

const MoviesList = styled.ul`
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
