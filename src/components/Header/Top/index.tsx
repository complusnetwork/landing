import {
  StyledTop,
  StyledTopLogo,
  StyledTopTitle,
  StyledTopSubTitle,
} from "./styled";

interface ITop {
  logo: React.ReactNode;
  title: string;
  subTitle: string;
}

const Top = ({ logo, title, subTitle }: ITop) => {
  return (
    <StyledTop>
      <StyledTopLogo>{logo}</StyledTopLogo>
      <StyledTopTitle>{title}</StyledTopTitle>
      <StyledTopSubTitle>{subTitle}</StyledTopSubTitle>
    </StyledTop>
  );
};

export default Top;
