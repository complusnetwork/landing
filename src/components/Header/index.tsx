import { useTranslation } from "react-i18next";
import { StyledHeaderContent, StyledHeaderInfo } from "./styled";
import Top from "./Top";
import Button from "../Button";
import complusLogo from "../../assets/svg/complusLogo.svg";

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeaderContent>
      <Top
        logo={<img src={complusLogo} alt="Complus Network" />}
        title="COMPLUS"
        subTitle="NETWORK"
      />
      <StyledHeaderInfo>
        {t("common.complus")}, {t("header.info1")}
      </StyledHeaderInfo>
      <StyledHeaderInfo>{t("header.info2")}</StyledHeaderInfo>
      <StyledHeaderInfo>
        <Button
          href="https://complus.exchange/litepaper.pdf"
          text={t("header.litepaper")}
        />
      </StyledHeaderInfo>
    </StyledHeaderContent>
  );
};

export default Header;
