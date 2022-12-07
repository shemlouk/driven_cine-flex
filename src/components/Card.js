import styled from "styled-components";

export default function Card({ weekday, date, showtimes }) {
  const time = `${weekday} - ${date}`;
  return (
    <StyledLi>
      <p>{time}</p>
      <StyledUl>
        {showtimes.map((s) => (
          <li key={s.id}>
            <StyledButton>{s.name}</StyledButton>
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

const StyledButton = styled.button`
  width: 83px;
  height: 43px;
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  margin-right: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: var(--main-color-darker);
  }
`;
