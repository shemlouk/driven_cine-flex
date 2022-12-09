import styled from "styled-components";

export default function Poster({ posterURL, setMovie, title }) {
  return <StyledImage onClick={() => setMovie(title)} src={posterURL} />;
}

const StyledImage = styled.img`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 8px;
  box-shadow: 0px 2px 4px 2px var(--shadow);
  border-radius: 3px;
`;
