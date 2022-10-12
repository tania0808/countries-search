import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  &>div {
    flex: 1;
  }
`;

export const Image = styled.div`
  display: block;
  width: 50%;
  flex: 1;
`;

export const Details = styled.div`
  display: block;
  width: 100%;
  flex: 1;
`;
