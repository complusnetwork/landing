import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 0.3rem;
  margin: 0.1rem;
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.darkSilver};
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.complusRed};
  }
`;

export const StyledExternalLink = styled.a`
  text-transform: uppercase;
  outline: none;
  user-select: none;
  white-space: nowrap;
  color: ${({ theme }) => theme.white};
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
`;
