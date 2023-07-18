import { useMemo } from "react";
import { StyledButton, StyledExternalLink } from "./styled";

interface IButton {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  text?: string;
}

const Button = ({ children, onClick, href, text }: IButton) => {
  const ButtonChild = useMemo(() => {
    if (href) {
      return (
        <StyledExternalLink as="a" href={href} target="_blank" rel="noreferrer">
          {text}
        </StyledExternalLink>
      );
    } else {
      return <StyledExternalLink>{text}</StyledExternalLink>;
    }
  }, [href, text]);

  return (
    <StyledButton onClick={onClick}>
      {children}
      {ButtonChild}
    </StyledButton>
  );
};

export default Button;
