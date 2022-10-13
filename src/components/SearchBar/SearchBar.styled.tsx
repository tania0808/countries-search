import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;

export const SearchInput = styled.div`
  align-items: center;
  position: relative;

  .icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.icon};
  }

  & > input {
    background-color: ${({ theme }) => theme.element};
    box-shadow: ${({ theme }) => theme.shadow} 0px 8px 24px;
    border: none;
    min-width: 200px;
    max-width: 100%;
    padding: 10px 20px;
    text-align: center;
    border-radius: 5px;
    color: ${({ theme }) => theme.icon};

    ::placeholder {
      color: ${({ theme }) => theme.icon};
    }

    :focus {
      outline: none;
    }
  }
`;

export const SearchFilter = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 15px;
  background-color: ${({ theme }) => theme.element};
  padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    box-shadow: ${({ theme }) => theme.shadow} 0px 8px 24px;

  .icon {
    color: ${({ theme }) => theme.icon};
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  align-items: flex-start;
  justify-content: baseline;
  gap: 5px;
  left: 0;
  width: 100%;
  padding: 5px 10px;
  height: fit-content;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow} 0px 8px 24px;
  cursor: pointer;
`;
