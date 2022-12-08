import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import Loading from "./Loading";
import Seat from "./Seat";
import SeatButton from "./SeatButton";

const API_URL_SEATS = (id) =>
  `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`;

const legend = [
  { en: "selected", pt: "Selecionado" },
  { en: "available", pt: "Disponível" },
  { en: "unavailable", pt: "Indisponível" },
];

export default function SeatPage() {
  const [seats, setSeats] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { sessionId } = useParams();

  useEffect(() => {
    axios
      .get(API_URL_SEATS(sessionId))
      .then((res) => setSeats(res.data))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }, []);

  const showSeats = () =>
    seats.seats.map((s) => (
      <Seat key={s.id} {...{ ...s, selectedSeats, setSelectedSeats }} />
    ));

  const showLegend = () =>
    legend.map((element) => (
      <li key={element.en}>
        <SeatButton color={element.en} />
        <p>{element.pt}</p>
      </li>
    ));

  const isDataLoaded = () => Object.keys(seats).length !== 0;

  return (
    <>
      <Container adjustBottom="true">
        <p>Selecione o(s) assento(s)</p>
        {isDataLoaded() ? (
          <>
            <Seats>{showSeats()}</Seats>
            <Legend>{showLegend()}</Legend>
            <Form selectedSeats={selectedSeats} />
          </>
        ) : (
          <Loading />
        )}
      </Container>
      {isDataLoaded() && (
        <Footer
          title={seats.movie.title}
          posterURL={seats.movie.posterURL}
          weekday={seats.day.weekday}
          date={seats.day.date}
        />
      )}
    </>
  );
}

const Seats = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 26px);
  grid-template-rows: repeat(5, 26px);
  gap: 18px 7px;
`;

const Legend = styled.ul`
  display: flex;
  margin-top: 20px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 10px;
  }

  p {
    font-size: 13px;
    color: var(--font-grey);
    margin-top: 10px;
  }

  button {
    cursor: auto;
  }
`;
