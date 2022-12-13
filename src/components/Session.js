import styled from "styled-components";
import StyledButton from "./StyledButton";
import { Link } from "react-router-dom";

export default function Session({ weekday, date, showtimes }) {
  return (
    <SessionCard data-test="movie-day">
      <p>
        {weekday} - {date}
      </p>
      <Showtimes>
        {showtimes.map((s) => (
          <li key={s.id}>
            <Link to={`/assentos/${s.id}`}>
              <StyledButton data-test="showtime">{s.name}</StyledButton>
            </Link>
          </li>
        ))}
      </Showtimes>
    </SessionCard>
  );
}

const SessionCard = styled.li`
  margin-bottom: 40px;

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Showtimes = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
