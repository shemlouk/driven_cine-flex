import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0px 20px;
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

export default StyledButton;
