import styled from "styled-components";

export const Btn = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  width: 100px;
  padding: 7px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
