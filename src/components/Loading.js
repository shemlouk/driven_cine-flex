import styled from "styled-components";

const numDots = 3;

export default function Loading() {
  function getDots() {
    const dots = [];
    for (let i = 1; i <= numDots; i++) {
      const dot = <Dot key={i} delay={`${i / 10}s`} />;
      dots.push(dot);
    }
    return dots;
  }

  return (
    <Container>
      <Frame>{getDots()}</Frame>
      <p>Loading</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    margin-top: 30px;
    color: var(--main-color);
  }
`;

const Frame = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--main-color);
  margin: 7px;
  animation: jumping 0.6s ${(props) => props.delay} linear infinite;
`;
