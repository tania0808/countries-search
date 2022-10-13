import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${({ theme }) => theme.element};
  box-shadow: 0 4px 2px -2px ${({ theme }) => theme.shadow};
  margin-bottom: 2rem;
`;

export const NavLogo = styled.h1`
  font-size: 24px;
`;

export const ToggleModeButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  font-weight: 600;
`;
