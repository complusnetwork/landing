import { useTranslation } from "react-i18next";
import {
  StyledBox,
  StyledBoxLogo,
  StyledBoxImg,
  StyledBoxTitle,
  StyledBoxSubtitle,
  StyledBoxButtonsContainer,
} from "./styled";
import Button from "../Button";

interface IChains {
  chains: {
    id: number;
    logo: string;
    title: string;
    subTitle: string;
    farmingLink: string;
    chartsLink: string;
    exchangeLink: string;
  }[];
}
const ChainBox = ({ chains }: IChains) => {
  const { t } = useTranslation();

  return (
    <>
      {chains.map((chain) => {
        return (
          <StyledBox key={chain.id}>
            <StyledBoxLogo>
              <StyledBoxImg src={chain.logo} alt={chain.title} />
            </StyledBoxLogo>
            <StyledBoxTitle>{chain.title}</StyledBoxTitle>
            <StyledBoxSubtitle>{chain.subTitle}</StyledBoxSubtitle>
            <StyledBoxButtonsContainer>
              <Button href={chain.farmingLink} text={t("chainBoxes.farm")} />
              <Button href={chain.chartsLink} text={t("chainBoxes.chart")} />
              <Button href={chain.exchangeLink} text={t("chainBoxes.dex")} />
            </StyledBoxButtonsContainer>
          </StyledBox>
        );
      })}
    </>
  );
};
export default ChainBox;
