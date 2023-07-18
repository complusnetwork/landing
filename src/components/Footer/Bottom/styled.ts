import styled from "styled-components";

export const StyledBottom = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  text-align: center;
`;

export const StyledBottomIcons = styled.a`
  font-size: 1.75rem;
  padding: 0.25rem;
  color: ${({ theme }) => theme.secondary};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }
`;

export const StyledBottomCopyright = styled.span`
  padding-top: 1rem;
  color: ${({ theme }) => theme.secondary};
  border-top: 1px solid ${({ theme }) => theme.border};
`;
