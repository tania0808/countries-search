import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  & > div {
    flex: 1;
  }
  
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 0 0 0 2rem;
  justify-content: space-evenly;

  @media (max-width: 840px) {
    padding: 2rem 0 0 0;
  }

  .info-name {
    font-size: 14px;
    font-weight: 600;
  }

  .value {
    font-weight: 400;
  }

  .borders {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: start;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .border-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 1rem;
  }

  .details {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  .col {
    & > p {
      padding-bottom: 5px;
    }
  }
`;
