import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledButton from "./StyledButton";

export default function Card({ weekday, date, showtimes, setSession }) {
  return (
    <StyledLi>
      <p>
        {weekday} - {date}
      </p>
      <StyledUl>
        {showtimes.map((s) => (
          <li key={s.id}>
            <Link to={`/assentos/${s.id}`}>
              <StyledButton onClick={() => setSession(`${date} ${s.name}`)}>
                {s.name}
              </StyledButton>
            </Link>
          </li>
        ))}
      </StyledUl>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  margin-bottom: 40px;

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
