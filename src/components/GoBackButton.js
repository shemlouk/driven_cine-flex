import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function GoBackButton() {
  const location = useLocation();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (pages[pages.length - 1] === location.pathname) return;
    setPages([...pages, location.pathname]);
  }, [location]);

  return (
    <StyledDiv data-test="go-home-header-btn">
      <Link to={pages[pages.length - 2]}>
        <ion-icon
          onClick={() => setPages(pages.slice(0, -1))}
          name="arrow-back-circle-outline"
        ></ion-icon>
      </Link>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: absolute;
  left: 30px;

  ion-icon {
    width: 40px;
    height: 40px;
  }
`;
