import apiURL from "../../apiURL";
import axios from "axios";
import styled from "styled-components";
import Container from "../Container";
import Seat from "../Seat";
import SeatButton from "../SeatButton";
import Form from "../Form";
import Loading from "../Loading";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const legend = [
  { en: "selected", pt: "Selecionado" },
  { en: "available", pt: "Disponível" },
  { en: "unavailable", pt: "Indisponível" },
];

export default function SeatPage() {
  const [data, setData] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { sessionId } = useParams();

  useEffect(() => {
    axios
      .get(apiURL.seats(sessionId))
      .then((res) => setData(res.data))
      .catch((error) =>
        alert(`Não foi possível carregar os dados\n${error.message}`)
      );
  }, []);

  return (
    <>
      <Container adjustBottom="true">
        <p>Selecione o(s) assento(s)</p>
        {Object.keys(data).length !== 0 ? (
          <>
            <Seats>
              {data.seats.map((s) => (
                <Seat
                  key={s.id}
                  {...{ ...s, selectedSeats, setSelectedSeats }}
                />
              ))}
            </Seats>
            <Legend>
              {legend.map((l) => (
                <li key={l.en}>
                  <SeatButton state={l.en} />
                  <p>{l.pt}</p>
                </li>
              ))}
            </Legend>
            <Form
              {...{
                selectedSeats,
                movie: data.movie.title,
                session: `${data.day.date} - ${data.name}`,
              }}
            />
          </>
        ) : (
          <Loading />
        )}
      </Container>
      {Object.keys(data).length !== 0 && (
        <Footer
          {...{
            title: data.movie.title,
            posterURL: data.movie.posterURL,
            weekday: data.day.weekday,
            time: data.name,
          }}
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
