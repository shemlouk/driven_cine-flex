import styled from "styled-components";

const SeatButton = styled.button`
  width: 26px;
  height: 26px;
  border: 1px solid var(--${({ state }) => state}-border);
  border-radius: 50%;
  background-color: var(--${({ state }) => state});
  font-size: 11px;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;

export default SeatButton;
