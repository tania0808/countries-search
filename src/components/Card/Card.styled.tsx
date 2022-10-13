import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 840px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.element};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow} 0px 8px 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 165px;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > p {
    font-size: 14px;

    & > span {
      font-weight: 600;
    }
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;
