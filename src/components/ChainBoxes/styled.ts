import styled from "styled-components";

export const StyledChainBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  flex-wrap: wrap;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
  flex-direction: column;
  flex-wrap: wrap;
  `};
`;
