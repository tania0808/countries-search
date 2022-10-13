import styled from "styled-components";

export const Container = styled.div`
  margin: 0 2rem;
  max-width: 80%;
  margin: 0 auto;
  
  @media (max-width: 840px) {
    max-width: 60%;
  }

  @media (max-width: 560px) {
    max-width: 80%;
  }
`;
