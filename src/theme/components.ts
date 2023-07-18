import styled, { keyframes } from "styled-components";

const Box = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.img`
  animation: 2s ${rotate} linear infinite;
  width: 16px;
  height: 16px;
`;
export const CustomSpinner = styled(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

export const Hidden = styled(Box)<{
  upToExtraSmall?: boolean;
  upToSmall?: boolean;
  upToMedium?: boolean;
  upToLarge?: boolean;
}>`
  ${({ theme, upToExtraSmall }) =>
    upToExtraSmall &&
    theme.mediaWidth.upToExtraSmall`
    display: none;
  `};

  ${({ theme, upToSmall }) =>
    upToSmall &&
    theme.mediaWidth.upToSmall`
    display: none;
  `};

  ${({ theme, upToMedium }) =>
    upToMedium &&
    theme.mediaWidth.upToMedium`
    display: none;
  `};

  ${({ theme, upToLarge }) =>
    upToLarge &&
    theme.mediaWidth.upToLarge`
    display: none;
  `};
`;

export const Visible = styled(Box)<{
  upToExtraSmall?: boolean;
  upToSmall?: boolean;
  upToMedium?: boolean;
  upToLarge?: boolean;
}>`
  display: none;
  ${({ theme, upToExtraSmall }) =>
    upToExtraSmall &&
    theme.mediaWidth.upToExtraSmall`
    display: block;
  `};

  ${({ theme, upToSmall }) =>
    upToSmall &&
    theme.mediaWidth.upToSmall`
    display: block;
  `};

  ${({ theme, upToMedium }) =>
    upToMedium &&
    theme.mediaWidth.upToMedium`
    display: block;
  `};

  ${({ theme, upToLarge }) =>
    upToLarge &&
    theme.mediaWidth.upToLarge`
    display: block;
  `};
`;
