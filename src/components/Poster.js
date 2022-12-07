import styled from "styled-components";

export default function Poster({ imageURL }) {
  return (
    <StyledLi>
      <img src={imageURL} />
    </StyledLi>
  );
}

const StyledLi = styled.li`
  width: 145px;
  height: 209px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px 2px var(--shadow);
  border-radius: 3px;
  margin: 10px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 5px var(--shadow);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
