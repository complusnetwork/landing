import styled from "styled-components";

export const StyledTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const StyledTopLogo = styled.div`
  display: block;
  > img {
    width: 7.5rem;
  }
`;
export const StyledTopTitle = styled.span`
  font-family: "Hammersmith One", sans-serif;
  color: ${({ theme }) => theme.text};
  font-size: 2.75rem;
  padding-top: 0.25rem;
  margin-bottom: -0.5rem;
`;
export const StyledTopSubTitle = styled.span`
  color: ${({ theme }) => theme.primary};
`;
