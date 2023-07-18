import styled from "styled-components";

export const StyledHeaderContent = styled.div`
  height: 100%;
  text-align: center;
  padding: 0 1rem;
  margin: 3rem 0;
`;

export const StyledHeaderInfo = styled.div`
  max-width: 1280px;
  padding: 0.5rem;
  color: ${({ theme }) => theme.primary};

  > hr {
    border-top: 1px solid ${({ theme }) => theme.border};
  }
`;
export const StyledHeaderLink = styled.a`
  color: ${({ theme }) => theme.text};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.complusRed};
  }
`;
