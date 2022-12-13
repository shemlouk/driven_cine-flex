import { Link } from "react-router-dom";
import styled from "styled-components";
import GoBackButton from "./GoBackButton";

export default function Header() {
  return (
    <StyledHeader>
      <GoBackButton />
      <Link to="/">
        <h1>CINEFLEX</h1>
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 67px;
  background-color: var(--header-background);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  box-shadow: 0px 3px 10px 0px var(--shadow);

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 34px;
    color: var(--main-color);
  }
`;
