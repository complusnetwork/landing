import styled from "styled-components";

export const StyledBox = styled.div`
  min-width: 21rem;
  padding: 1.75rem;
  margin: 0.75rem;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.bg};
  transition: all 0.3s ease-out;

  &::after {
    opacity: 0.75;
  }

  &:hover {
    border-color: ${({ theme }) => theme.border};
  }
`;

export const StyledBoxLogo = styled.div`
  margin: 0 auto;
  display: block;
`;

export const StyledBoxImg = styled.img`
  border: none;
`;

export const StyledBoxTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-top: 0.75rem;
`;

export const StyledBoxSubtitle = styled.h4`
  overflow: hidden;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  margin: 0.5rem 3rem 1.75rem 3rem;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
    background-color: ${({ theme }) => theme.border};
  }

  &::before {
    right: 0.75em;
    margin-left: -50%;
  }

  &::after {
    left: 0.75em;
    margin-right: -50%;
  }
`;
export const StyledBoxButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
