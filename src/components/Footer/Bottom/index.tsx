import { useTranslation } from "react-i18next";
import {
  StyledBottom,
  StyledBottomIcons,
  StyledBottomCopyright,
} from "./styled";
import {
  IoLogoTwitter,
  IoPaperPlaneSharp,
  IoLogoMedium,
  IoLogoGithub,
} from "react-icons/io5";

const Bottom = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledBottom>
        <StyledBottomIcons
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/complusnetwork"
        >
          <IoLogoTwitter />
        </StyledBottomIcons>
        <StyledBottomIcons
          target="_blank"
          rel="noreferrer"
          href="https://t.me/complus_group"
        >
          <IoPaperPlaneSharp />
        </StyledBottomIcons>
        <StyledBottomIcons
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@complusnetwork"
        >
          <IoLogoMedium />
        </StyledBottomIcons>
        <StyledBottomIcons
          target="_blank"
          rel="noreferrer"
          href="https://github.com/complusnetwork"
        >
          <IoLogoGithub />
        </StyledBottomIcons>
      </StyledBottom>

      <StyledBottom>
        <StyledBottomCopyright>
          © {new Date().getFullYear()} {t("common.complus")} |{" "}
          {t("footer.reserved")}
        </StyledBottomCopyright>
      </StyledBottom>
    </>
  );
};

export default Bottom;
